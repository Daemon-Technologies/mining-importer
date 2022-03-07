import sha512 from 'js-sha512'
import Database from 'better-sqlite3'
import stacks_transactions from '@blockstack/stacks-transactions'
const { getAddressFromPublicKey, TransactionVersion } = stacks_transactions
import secp256k1 from 'secp256k1'
import c32 from 'c32check'
import {STACKS_NODE_SQLITE_PATH} from "../common/constants";
import axios from "axios";
import {async} from "rxjs";

async function getRawTransaction(txid){
    let url = 'http://daemontech2:daemontech2@47.242.123.146:8332/'
    try {
        const response = await axios({
            method: 'post',
            url: url,
            data: {

                "jsonrpc": "1.0",
                "id": "curltest",
                "method": "getrawtransaction",
                "params": [txid, true]

            }
        })

        return {response: response, error: undefined}
    } catch (e) {

        return  {response: undefined, error: e}
    }

}

function getVOUTValue(vout){
    let UTXOOutput = 0
    vout.forEach(
        v => {
            UTXOOutput += v.value
        }
    )
    return UTXOOutput
}

function getVOutValueByBtcAddress(vout, btc_address){
    let UTXOOutput = 0
    for (let v of vout){
        if (v.scriptPubKey.addresses != undefined && v.scriptPubKey.addresses.length > 0 && v.scriptPubKey.addresses[0] == btc_address){
            UTXOOutput = UTXOOutput + v.value
        }
    }

    return UTXOOutput
}

export async function getTransactionFromBtcRpc(txid, btc_address) {
    let ob = await getRawTransaction(txid)
    if (ob.error != undefined){
        console.log(`getRawTransaction error: ${ob.error}`)
        return
    }

    let UTXOOutput = getVOUTValue(ob.response.data.result.vout)


    let UTXOInput = 0
    for (let txIn of ob.response.data.result.vin) {
        let UTXOInputOb = await getRawTransaction(txIn.txid)
        if (UTXOInputOb.error != undefined){
            console.log(`getRawTransaction error: ${UTXOInputOb.error}`)
            return
        }
        UTXOInput += getVOutValueByBtcAddress(UTXOInputOb.response.data.result.vout, btc_address)

    }

    console.log(`UTXO Gas is ${Math.round(UTXOInput * 1e8 - UTXOOutput * 1e8)}`)
    return Math.round(UTXOInput * 1e8 - UTXOOutput * 1e8)
}



export async function getMinerInfo(stacks_block_height, burn_block_height, burnchain_ops_rowid, delta_height, latest_txid) {
    const burnchain_db_path = 'burnchain/burnchain.sqlite'

    const sortition_db_path = "burnchain/sortition/marf.sqlite"

    const vm_db_path = "chainstate/vm/index.sqlite"

    const data_root_path = STACKS_NODE_SQLITE_PATH
    console.log(data_root_path)

    const use_txs = process.argv[2] === '-t'

    const burnchain_db = new Database(`${data_root_path}/${burnchain_db_path}`, {
        readonly: true,
        fileMustExist: true,
    })

    const sortition_db = new Database(`${data_root_path}/${sortition_db_path}`, {
        readonly: true,
        fileMustExist: true,
    })

    const headers_db = new Database(`${data_root_path}/${vm_db_path}`, {
        readonly: true,
        fileMustExist: true,
    })

    const staging_db = new Database(`${data_root_path}/${vm_db_path}`, {
        readonly: true,
        fileMustExist: true,
    })
    //console.log(`SELECT * FROM burnchain_db_block_ops WHERE rowid > (SELECT rowid FROM burnchain_db_block_ops WHERE txid = ${latest_txid})`)
    // burnchain queries
    const stmt_all_burnchain_ops = burnchain_db.prepare(`SELECT * FROM burnchain_db_block_ops WHERE rowid > (SELECT rowid FROM burnchain_db_block_ops WHERE txid = '')`)

    // sortition queries
    const stmt_all_blocks = sortition_db.prepare(`SELECT * FROM snapshots WHERE block_height > ${burn_block_height} AND block_height <= ${burn_block_height+delta_height} order by block_height desc `)

    const stmt_all_block_commits = sortition_db.prepare(`SELECT * FROM block_commits WHERE block_height > ${burn_block_height} AND block_height <= ${burn_block_height+delta_height} order by block_height`)

    const stmt_all_leader_keys = sortition_db.prepare(`SELECT * FROM leader_keys WHERE block_height > ${burn_block_height} AND block_height <= ${burn_block_height+delta_height}`)

    // header queries
    const stmt_all_payments = headers_db.prepare(`SELECT * FROM payments WHERE stacks_block_height > ${stacks_block_height} AND stacks_block_height <= ${stacks_block_height+delta_height} order by stacks_block_height`)
    const stmt_all_block_headers = headers_db.prepare(`SELECT * FROM block_headers WHERE block_height > ${stacks_block_height} AND block_height <= ${stacks_block_height+delta_height} order by block_height`)

    // staging queries
    const stmt_all_staging_blocks = staging_db.prepare(`SELECT * FROM staging_blocks WHERE height > ${stacks_block_height} AND height <= ${stacks_block_height+delta_height} order by height`)

    // transactions query
    const stmt_all_transactions = use_txs ? headers_db.prepare('SELECT * FROM transactions') : null

    let transaction_count = 0
    let stacks_blocks_by_height = []
    let burn_blocks_by_height = []
    let burn_blocks_by_burn_header_hash = {}
    let burn_blocks_by_consensus_hash = {}
    let stacks_blocks_by_stacks_block_hash = {}
    let transactions_by_stacks_block_id = {}
    let burnchain_ops_by_burn_hash = {}

    let blocks_commit_info = {}

    let miners = {}
    let actual_win_total = 0
    let win_total = 0

    const branches = [
        {
            tip: '0000000000000000000000000000000000000000000000000000000000000000',
            name: 'br1',
            index: 1,
            height_created: 0,
            seen: 0,
            last_seen: '',
            depth: 0,
        },
    ]

    function branch_from_parent(block_hash: string, parent_hash: string) {
        const branch_info = branches.find(b => b.tip === parent_hash)
        if (branch_info) {
            branch_info.tip = block_hash
            branch_info.last_seen = stacks_blocks_by_stacks_block_hash[block_hash].block_height
            branch_info.seen++
            branch_info.depth++
            return branch_info
        }
        const current_height = stacks_blocks_by_stacks_block_hash[block_hash] ? stacks_blocks_by_stacks_block_hash[block_hash].block_height - 1 : 1

        const new_branch_info = {
            tip: block_hash,
            name: `br${branches.length + 1}`,
            index: branches.length + 1,
            height_created: current_height,
            seen: 1,
            last_seen: stacks_blocks_by_stacks_block_hash[block_hash].block_height,
            depth: current_height + 1,
        }
        branches.push(new_branch_info)
        return new_branch_info
    }

    function find_leader_key(block_height, vtxindex) {
        const stmt_leader_key = sortition_db.prepare(`SELECT * FROM leader_keys where block_height = ${block_height} and vtxindex = ${vtxindex}`)
        const result = stmt_leader_key.all()
        if (result.length != 0) {
            return result[0]
        } else {
            return undefined
        }

        /*
        const block = burn_blocks_by_height[block_height]

        const leader_key = block.leader_keys.find(lk => lk.vtxindex === vtxindex)
        if (!leader_key) {
            console.log("leader_key not found", block_height, vtxindex)
        }
        return result

         */
    }

    function post_process_block_commits() {
        for (let blockindex of Object.keys(burn_blocks_by_height)) {
            let block = burn_blocks_by_height[blockindex]
            //console.log("burn_blocks_by_height:", typeof(burn_blocks_by_height))
            //console.log("burn_blocks_by_height keys:",Object.keys(burn_blocks_by_height))
            //console.log("block:", block)
            for (let block_commit of block.block_commits) {
                block_commit.leader_key = find_leader_key(block_commit.key_block_ptr, block_commit.key_vtxindex)
                block_commit.leader_key_address = block_commit.leader_key.address
            }
        }
    }

    function process_snapshots() {
        const result = stmt_all_blocks.all()
        let parent = undefined
        let tempG = undefined
        for (let row of result) {
            if (row.pox_valid === 0) {
                //console.log("pox invalid", row.block_height, row.burn_header_hash, parent.parent_burn_header_hash)
            }
            else if (!parent || row.burn_header_hash === parent.parent_burn_header_hash) {
                burn_blocks_by_height[row.block_height] = row
                burn_blocks_by_burn_header_hash[row.burn_header_hash] = row
                burn_blocks_by_consensus_hash[row.consensus_hash] = row
                row.block_commits = []
                row.leader_keys = []
                row.payments = []
                row.staging_blocks = []
                row.block_headers = []
                parent = row
            } else {
                console.log("no match", row.block_height, row.burn_header_hash, parent.parent_burn_header_hash)
            }
            tempG = row
        }

        if (burn_blocks_by_height.filter(b => !b).length !== 0) {
            console.log("missing blocks", burn_blocks_by_height.filter(b => !b))
            process.exit()
        }
        console.log("latest snap shot:", tempG)
        console.log("Burnchain Height:", burn_blocks_by_height.length)

    }

    function process_leader_keys() {
        const result = stmt_all_leader_keys.all()
        // console.log("leader_keys", result)
        // console.log("process_leader_keys.length", result.length)
        for (let row of result) {
            if (burn_blocks_by_burn_header_hash[row.burn_header_hash]) {
                burn_blocks_by_burn_header_hash[row.burn_header_hash].leader_keys.push(row)
            }
        }
    }

    function process_block_commits() {
        const result = stmt_all_block_commits.all()
        // console.log("block_commits", result)
        // console.log("process_block_commits.length", result.length)
        for (let row of result) {
            if (burn_blocks_by_burn_header_hash[row.burn_header_hash]) {
                burn_blocks_by_burn_header_hash[row.burn_header_hash].block_commits.push(row)
            }
        }
    }



    function process_staging_blocks() {
        const result = stmt_all_staging_blocks.all()
        // console.log("staging_blocks", result)
        // console.log("staging_blocks.length", result.length)
        // console.log("burn_blocks_by_consensus_hash", burn_blocks_by_consensus_hash)
        for (let row of result) {
            // console.log(row.consensus_hash, row)
            if (burn_blocks_by_consensus_hash[row.consensus_hash] === undefined) continue;
            burn_blocks_by_consensus_hash[row.consensus_hash].staging_blocks.push(row)
        }
    }

    function process_block_headers() {
        const result = stmt_all_block_headers.all()
        // console.log("stmt_all_block_headers", result)
        // console.log("stmt_all_block_headers.length", result.length)
        for (let row of result) {
            if (burn_blocks_by_burn_header_hash[row.burn_header_hash]) {
                burn_blocks_by_burn_header_hash[row.burn_header_hash].block_headers.push(row)
                stacks_blocks_by_stacks_block_hash[row.block_hash] = row
            }
        }
    }

    function post_process_miner_stats() {
        let total_burn_prev = 0
        for (let blockindex of Object.keys(burn_blocks_by_height)) {
            let block = burn_blocks_by_height[blockindex]
            const total_burn = parseInt(block.total_burn) - total_burn_prev
            block.actual_burn = total_burn
            total_burn_prev = parseInt(block.total_burn)
            for (let block_commit of block.block_commits) {
                if (!miners[block_commit.leader_key_address]) {
                    miners[block_commit.leader_key_address] = {
                        mined: 0,
                        won: 0,
                        burned: 0,
                        total_burn: 0,
                        paid: 0,
                        actual_win: 0,
                        actual_win_bonus: 0
                    }
                }
                const miner = miners[block_commit.leader_key_address]
                miner.mined++
                miner.burned += parseInt(block_commit.burn_fee)
                miner.total_burn += total_burn
                if (block_commit.txid === block.winning_block_txid) {
                    miner.won++
                    win_total++
                }
            }
        }
    }

    function post_process_winning_fork() {
        const sorted_branches = branches.sort((a, b) => a.depth - b.depth)
        const highest_branch = sorted_branches[sorted_branches.length - 1]
        // console.log(highest_branch)
        let current_tip = highest_branch.tip
        while (stacks_blocks_by_stacks_block_hash[current_tip] != undefined) {
            const stacks_block = stacks_blocks_by_stacks_block_hash[current_tip]
            //console.log(stacks_block)
            const burn_block = burn_blocks_by_burn_header_hash[stacks_block.burn_header_hash]

            blocks_commit_info[burn_block.stacks_block_height] = burn_block.block_commits

            burn_block.on_winning_fork = true
            burn_block.branch_info.winning_fork = true
//console.log(burn_block)
            const winnerIndex = burn_block.block_commits.findIndex(bc => bc.txid === burn_block.winning_block_txid)
            const winner = burn_block.block_commits[winnerIndex]
            winner.stacks_block_height = burn_block.stacks_block_height
            winner.burn_chain_height = burn_block.block_height
            winner.burn_header_timestamp = burn_block.burn_header_timestamp
            winner.winning_block_txid = burn_block.winning_block_txid
            winner.burn_header_hash = burn_block.burn_header_hash

            let payments = burn_block.payments[0]
            winner.tx_reward = ((parseInt(payments.tx_fees_anchored) + parseInt(payments.tx_fees_streamed)) / 1000000).toFixed(4)
            winner.block_reward = parseInt(payments.coinbase) / 1000000
            //console.log(winner.tx_reward, payments.tx_fees_anchored, payments.tx_fees_streamed)
            stacks_blocks_by_height.push(winner)
            const winning_miner = miners[winner.leader_key_address]
            winning_miner.actual_win++
            if (winning_miner.stx_earned === undefined) {
                winning_miner.stx_earned = parseFloat(winner.block_reward) + parseFloat(winner.tx_reward)
            } else {
                winning_miner.stx_earned = parseFloat(winning_miner.stx_earned) + parseFloat(winner.block_reward) + parseFloat(winner.tx_reward)
            }

            if (stacks_block.block_height < 8387)
                winning_miner.actual_win_bonus++
            actual_win_total++
            //console.log(stacks_block.block_height)
            current_tip = stacks_block.parent_block
        }
    }

    function post_process_branches() {
        for (let blockindex of Object.keys(burn_blocks_by_height)) {
            if (blockindex <= burn_block_height) continue;
            let block = burn_blocks_by_height[blockindex]
            if (block.block_headers.length) {
                block.branch_info = branch_from_parent(block.block_headers[0].block_hash, block.block_headers[0].parent_block)
            }
        }
    }

    function Sha512Trunc256Sum(block_hash, consensus_hash) {
        return sha512.sha512_256(Buffer.concat([block_hash, consensus_hash]))
    }
    function process_payments() {
        const result = stmt_all_payments.all()
        // console.log("payments", result)
        // console.log("payments.length", result.length)
        // console.log("burn_blocks_by_consensus_hash", burn_blocks_by_consensus_hash)
        for (let row of result) {
            // console.log(row.burn_header_hash, row)
            if (burn_blocks_by_consensus_hash[row.consensus_hash] === undefined) continue;
            burn_blocks_by_consensus_hash[row.consensus_hash].payments.push(row)
        }
    }
    function process_transactions() {
        const result = stmt_all_transactions.all()

        for (let row of result) {
            if (!transactions_by_stacks_block_id[row.index_block_hash]) {
                transactions_by_stacks_block_id[row.index_block_hash] = []
            }
            transactions_by_stacks_block_id[row.index_block_hash].push(row)  // TODO(psq): only txid enough?
        }
        for (let key of Object.keys(transactions_by_stacks_block_id)) {
            transaction_count += transactions_by_stacks_block_id[key].length - 1
        }
    }

    function process_burnchain_ops() {

        let result = stmt_all_burnchain_ops.all()
        // console.log("process_burnchain_ops", result)
        console.log("========================================================================================================================")
        console.log("Leader key registrations")
        //console.log(result[0])
        for (let row of result) {
            if (!burnchain_ops_by_burn_hash[row.block_hash]) {
                burnchain_ops_by_burn_hash[row.block_hash] = []
            }
            const op = JSON.parse(row.op)
            //console.log(op)
            if (op.LeaderBlockCommit) {
                op.LeaderBlockCommit.burn_header_hash_hex = Buffer.from(op.LeaderBlockCommit.burn_header_hash).toString('hex')
                //console.log(op.LeaderBlockCommit);
                op.LeaderBlockCommit.public_key = secp256k1.publicKeyConvert(Buffer.from(op.LeaderBlockCommit.apparent_sender.public_keys[0].key, 'hex'), op.LeaderBlockCommit.apparent_sender.public_keys[0].compressed).toString('hex')
                //console.log(Buffer.from(op.LeaderBlockCommit.input.public_keys[0].key, 'hex'), op.LeaderBlockCommit.public_key)
                op.LeaderBlockCommit.stacks_address = getAddressFromPublicKey(op.LeaderBlockCommit.public_key, TransactionVersion.Testnet)
                op.LeaderBlockCommit.btc_address = c32.c32ToB58(op.LeaderBlockCommit.stacks_address)
                //console.log(op.LeaderBlockCommit.burn_header_hash_hex, op.LeaderBlockCommit.public_key, op.LeaderBlockCommit.stacks_address, op.LeaderBlockCommit.btc_address)
            } else if (op.LeaderKeyRegister) {
                op.LeaderKeyRegister.stacks_address = c32.c32address(op.LeaderKeyRegister.address.version, op.LeaderKeyRegister.address.bytes)
                // console.log(op.LeaderKeyRegister)
                //console.log(op.LeaderKeyRegister.block_height, op.LeaderKeyRegister.vtxindex, op.LeaderKeyRegister.stacks_address, )
            }
            burnchain_ops_by_burn_hash[row.block_hash].push(op)
        }
        // console.log("burnchain_ops_by_burn_hash", JSON.stringify(burnchain_ops_by_burn_hash, null, 2))
        console.log("========================================================================================================================")
    }

    console.log("process_burnchain_ops")
    process_burnchain_ops()
    let used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("process_snapshots")
    process_snapshots()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("process_leader_keys")
    process_leader_keys()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("process_block_commits")
    process_block_commits()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("process_payments")
    process_payments()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    //console.log("process_staging_blocks")
    process_staging_blocks()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);

    console.log("process_block_headers")
    process_block_headers()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);

    if (use_txs) {
        process_transactions()
        used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    }

    console.log("post_process_block_commits")
    post_process_block_commits()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("post_process_miner_stats")
    post_process_miner_stats()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("post_process_branches")
    post_process_branches()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("post_process_winning_fork")
    post_process_winning_fork()
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);

    let stacks_block_height_max = 0
    let parent_hash = null
    let parent_winner_address = null
    for (let blockindex of Object.keys(burn_blocks_by_height)) {
        let block = burn_blocks_by_height[blockindex]
        let at_tip = ' '
        if (block.payments.length && block.payments[0].stacks_block_height > stacks_block_height_max) {
            stacks_block_height_max = block.payments[0].stacks_block_height
            at_tip = '>'
        }
        const current_winner_address = block.block_commits.find(bc => bc.txid === block.winning_block_txid)

        const stacks_block_id = block.block_headers.length ? Sha512Trunc256Sum(Buffer.from(block.block_headers[0].block_hash, 'hex'), Buffer.from(block.block_headers[0].consensus_hash, 'hex')) : '-'
        const txids = block.block_headers.length && use_txs ? `[${transactions_by_stacks_block_id[stacks_block_id].map(tx => tx.txid.substring(0, 10)).join(',')}]` : ''

        parent_winner_address = current_winner_address
        parent_hash = block.block_headers.length ? block.block_headers[0].block_hash : null
    }

    if (use_txs) {
        //console.log("========================================================================================================================")
        //console.log("total transactions (excl coinbase)", transaction_count)
    }
    //console.log("========================================================================================================================")
    //console.log("STX address/BTC address - actual wins/total wins/total mined %won %actual wins - paid satoshis Th[theoritical win%] (avg paid)")

    let miners_result = []

    for (let miner_key of Object.keys(miners).sort()) {
        const miner = miners[miner_key]
        //console.log(`${miner_key}/${c32.c32ToB58(miner_key)} ${miner.actual_win}/${miner.won}/${miner.mined} ${(miner.won / miner.mined * 100).toFixed(2)}% ${(miner.actual_win / actual_win_total * 100).toFixed(2)}% - ${miner.burned} - Th[${(miner.burned / miner.total_burn * 100).toFixed(2)}%] (${miner.burned / miner.mined})`)
        miner.average_burn = miner.burned / miner.mined
        miner.normalized_wins = miner.won / miner.average_burn
        const miner_result = {
            stx_address:miner_key,
            btc_address:c32.c32ToB58(miner_key),
            actual_win:miner.actual_win,
            actual_win_bonus: miner.actual_win_bonus,
            total_win:miner.won,
            total_mined: miner.mined,
            miner_burned: miner.burned,
            stx_earned: miner.stx_earned
        }
        miners_result.push(miner_result)
    }
    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    let stacks_block_results = {}
    /*
          winner.stacks_block_height = burn_block.stacks_block_height
          winner.burn_chain_height = burn_block.block_height
          winner.burn_header_timestamp = burn_block.burn_header_timestamp
          winner.winning_block_txid = burn_block.winning_block_txid
          winner.burn_header_hash = burn_block.burn_header_hash
    */
    for (let stacks_block of stacks_blocks_by_height){
        const stacks_block_result = {
            stacks_block_height: stacks_block.stacks_block_height,
            stx_address: stacks_block.leader_key_address,
            btc_address: c32.c32ToB58(stacks_block.leader_key_address),
            burn_fee: stacks_block.burn_fee,
            burn_chain_height: stacks_block.block_height,
            burn_header_timestamp: stacks_block.burn_header_timestamp,
            winning_block_txid: stacks_block.winning_block_txid,
            burn_header_hash: stacks_block.burn_header_hash,
            tx_reward: stacks_block.tx_reward,
            block_reward: stacks_block.block_reward
        }
        stacks_block_results[stacks_block.stacks_block_height] = stacks_block_result
    }

    console.log("================================ Scanning End ================================")

    used = process.memoryUsage().heapUsed / 1024 / 1024; console.log(`The script uses approximately ${used} MB`);
    console.log("Stacks Chain Length:", stacks_blocks_by_height.length)
    return {winner_info: stacks_block_results, block_commits: blocks_commit_info}
}
