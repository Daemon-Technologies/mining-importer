// import {importData} from "./mining-importer";
import {getMinerInfo, getTransactionFromBtcRpc} from "./mining-test";
import axios from "axios";
import {graphClient} from "../common/graphql-client";
import {importBlockInfos} from "./common/importer-block-info";
import {
    Block_Info_Insert_Input, Commit_Gas_Info_Insert_Input,
    Commit_Info_Arr_Rel_Insert_Input,
    Commit_Info_Insert_Input, Config_Insert_Input
} from "../../graphql/node-types";
import {block} from "@graphql-codegen/visitor-plugin-common";
import c32 from "c32check";
import {fetchLatestBlock} from "./common/fetch-latest-block-height";
import {fetchBurnchainOpsRowid} from "./common/fetch-burnchain-ops-rowid";
import {fetchLatestTxId} from "./common/fetch-latest-txid";
import {DELTA_HEIGHT, INTERVAL_TIME_CONFIG, INTERVAL_TIME_MINING} from "../common/constants";
import {importConfigItem} from "./common/import-config-item";
import fs from "fs"
const file = fs.createWriteStream('./log.txt');
let logger = new console.Console(file, file);





async function importMiningData() {
    // find the start_stacks_block_height and start_burn_block_height
    let latest_block = await fetchLatestBlock()
    //console.log(latest_block.block_info[0].stacks_block_height, latest_block.block_info[0].btc_block_height)
    //let latest_txid_ob = await fetchLatestTxId()
    //let latest_txid = latest_txid_ob.commit_gas_info.length == 0? "": latest_txid_ob.commit_gas_info[0].commit_btc_tx_id
    let latest_txid = ""
    // find latest burnchain ops rowid
    let latest_rowid_ob = await fetchBurnchainOpsRowid()
    let latest_rowid = latest_rowid_ob.config.length === 0 ? 0 : parseInt(latest_rowid_ob.config[0].value)

    let start_stacks_block_height = latest_block.block_info.length === 0? 0 : latest_block.block_info[0].stacks_block_height
    let start_btc_block_height = latest_block.block_info.length === 0? 666050 : latest_block.block_info[0].btc_block_height
    console.log(`start fetching miner data. 
        stx height: ${parseInt(String(start_stacks_block_height))} 
        btc height: ${parseInt(String(start_btc_block_height))}
        delta height: ${parseInt(DELTA_HEIGHT)}
        latest txid: ${latest_txid}`)
    let miningInfo = await getMinerInfo(
        start_stacks_block_height,
        start_btc_block_height,
        latest_rowid,
        parseInt(DELTA_HEIGHT),
        latest_txid
    )

    if (Object.getOwnPropertyNames(miningInfo.winner_info).length !==  Object.getOwnPropertyNames(miningInfo.block_commits).length) {
        console.log(`winner_info has ${Object.getOwnPropertyNames(miningInfo.winner_info).length} items 
            but block_commits has ${Object.getOwnPropertyNames(miningInfo.block_commits).length} items`);
        return
    } else {

        // handle blockInfo and commitInfo
        let rowsToImport : Block_Info_Insert_Input[] = []
        for (let k of Object.keys(miningInfo.winner_info)){
            let miningInfoLen = Object.getOwnPropertyNames(miningInfo.winner_info).length
            let block_info = miningInfo.winner_info[k]
            let commit_info = miningInfo.block_commits[k]
            let blockInfoItem: Block_Info_Insert_Input = {}

            // blockInfo
            // force check to confirm if stacks_block_height is 0
            if (block_info.stacks_block_height < start_stacks_block_height || block_info.burn_chain_height < start_btc_block_height){
                console.log("zero block height error happens")
                logger.log(miningInfo)
                return
            }
            blockInfoItem.stacks_block_height = block_info.stacks_block_height
            blockInfoItem.btc_block_height = block_info.burn_chain_height
            blockInfoItem.winner_stx_address = block_info.stx_address
            blockInfoItem.winner_btc_address = block_info.btc_address
            blockInfoItem.block_reward = block_info.block_reward
            blockInfoItem.tx_reward = parseFloat(block_info.tx_reward)
            blockInfoItem.commit_value = parseInt(block_info.burn_fee)
            blockInfoItem.winner_to_all_commit = { data : []}
            blockInfoItem.timestamp = block_info.burn_header_timestamp

            // commit_info
            let commitInfoItemsRecord: Record<string, Commit_Info_Insert_Input> = {}

            for (let commit_info_key in commit_info){
                console.log(`mining_info ${k}/${miningInfoLen + start_stacks_block_height}`)
                console.log(`commit_info ${commit_info_key}/${commit_info.length}`)
                let item = commit_info[commit_info_key]
                let commitInfoItem: Commit_Info_Insert_Input = {}
                commitInfoItem.btc_block_height = blockInfoItem.btc_block_height = block_info.burn_chain_height
                commitInfoItem.btc_address = c32.c32ToB58(item.leader_key_address)
                commitInfoItem.stx_address = item.leader_key_address
                commitInfoItem.is_winner = (item.leader_key_address == block_info.stx_address)
                commitInfoItem.commit_value = parseInt(item.burn_fee)
                commitInfoItemsRecord[commit_info_key] = commitInfoItem

                // insert blockInfoItem
                blockInfoItem.winner_to_all_commit.data.push(commitInfoItem)

                // init commitGasInfo
                commitInfoItem.commit_info_to_commit_gas = {data : {}}

                // commit_gas_info
                let commitGasInfoItem: Commit_Gas_Info_Insert_Input = {}
                let d = await getTransactionFromBtcRpc(item.txid, commitInfoItem.btc_address)

                commitGasInfoItem.commit_btc_tx_id = item.txid
                commitGasInfoItem.commit_btc_gas_fee = d
                commitGasInfoItem.stacks_block_height = blockInfoItem.stacks_block_height
                commitGasInfoItem.btc_address = commitInfoItem.btc_address
                commitGasInfoItem.stx_address = commitInfoItem.stx_address

                commitInfoItem.commit_info_to_commit_gas.data = commitGasInfoItem

            }
            rowsToImport.push(blockInfoItem)
        }

        await importBlockInfos(rowsToImport)
    }


    // handle graphql insert

}


async function updateTokenPrice(){
    return new Promise(async function (resolve, reject) {
        try {
            let stx_usdt_url = "https://api.binance.com/api/v3/ticker/price?symbol=STXUSDT";
            let btc_usdt_url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
            const stx_resp = await axios(stx_usdt_url)
            const btc_resp = await axios(btc_usdt_url)
            console.log(stx_resp.data)
            console.log(btc_resp.data)
            if (stx_resp.data != undefined && btc_resp.data != undefined){
                let rows :Config_Insert_Input[] = []
                let stx_row : Config_Insert_Input = {
                    name: "stx_price",
                    value: stx_resp.data.price,
                    comment: "stx price"
                }
                let btc_row : Config_Insert_Input = {
                    name: "btc_price",
                    value: btc_resp.data.price,
                    comment: "btc price"
                }
                rows.push(stx_row)
                rows.push(btc_row)
                await importConfigItem(rows)
                resolve("finished")
            }
        } catch (error){
            reject(error)
        }
    }).catch((error) => {
        console.log(error)
    })
}

async function updateHashPower(){
    return new Promise(async function (resolve, reject) {
        try {
            let url = "https://api.blockchain.info/stats";
            let res = await axios((url).toString())

            if (res.data != undefined) {
                let hash_rate = (res.data.hash_rate / 1E9).toFixed(2)
                console.log(`hash_rate: ${hash_rate}`)
                let rows: Config_Insert_Input[] = []
                let hash_rate_row: Config_Insert_Input = {
                    name: "btc_hashrate",
                    value: String(hash_rate),
                    comment: "btc hash rate"
                }
                rows.push(hash_rate_row)
                await importConfigItem(rows)
                resolve("finished")
            }
        } catch (error) {
            reject(error)
        }
    }).catch((error) => {
        console.log(error)
    })

}



async function sleep(ms) {
    console.log("sleeping")
    return new Promise<void>((resolve, reject) => {
        setTimeout(
            () => {
                console.log("sleep time out")
                resolve()
            }, ms)
    })
}

/*
    Main Function
 */

(async () => {
    setInterval(
        async function (){
            await updateTokenPrice()
            await updateHashPower()
        },
        parseInt(INTERVAL_TIME_CONFIG) * 1000
    )
    while (true){
        try {
            await sleep(parseInt(INTERVAL_TIME_MINING) * 1000)
            await importMiningData()
        } catch (e) {
            console.log(e)
        }
    }
}) ()





