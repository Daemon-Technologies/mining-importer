// import {importData} from "./mining-importer";
import {getMinerInfo, getTransactionFromBtcRpc} from "./mining-test";
import axios from "axios";
import {graphClient} from "../common/graphql-client";
import {importBlockInfos} from "./common/importer-block-info";
import {
    Block_Info_Insert_Input, Commit_Gas_Info_Insert_Input,
    Commit_Info_Arr_Rel_Insert_Input,
    Commit_Info_Insert_Input
} from "../../graphql/node-types";
import {block} from "@graphql-codegen/visitor-plugin-common";
import c32 from "c32check";
import {fetchLatestBlock} from "./common/fetch-latest-block-height";
import {fetchBurnchainOpsRowid} from "./common/fetch-burnchain-ops-rowid";







async function importMiningData() {
    // find the start_stacks_block_height and start_burn_block_height
    let latest_block = await fetchLatestBlock()
    //console.log(latest_block.block_info[0].stacks_block_height, latest_block.block_info[0].btc_block_height)

    // find latest burnchain ops rowid
    let latest_rowid_ob = await fetchBurnchainOpsRowid()
    let latest_rowid = latest_rowid_ob.config.length === 0 ? 0 : parseInt(latest_rowid_ob.config[0].value)

    let start_stacks_block_height = latest_block.block_info.length === 0? 0 : latest_block.block_info[0].stacks_block_height
    let start_btc_block_height = latest_block.block_info.length === 0? 0 : latest_block.block_info[0].btc_block_height
    let miningInfo = await getMinerInfo(
        start_stacks_block_height,
        start_btc_block_height,
        latest_rowid
    )

    if (Object.getOwnPropertyNames(miningInfo.winner_info).length !==  Object.getOwnPropertyNames(miningInfo.block_commits).length) {
        console.log(`winner_info has ${Object.getOwnPropertyNames(miningInfo.winner_info).length} items 
            but block_commits has ${Object.getOwnPropertyNames(miningInfo.block_commits).length} items`);
        return
    } else {

        // handle blockInfo and commitInfo
        let rowsToImport : Block_Info_Insert_Input[] = []
        for (let k of Object.keys(miningInfo.winner_info)){
            let block_info = miningInfo.winner_info[k]
            let commit_info = miningInfo.block_commits[k]
            let blockInfoItem: Block_Info_Insert_Input = {}

            // blockInfo
            blockInfoItem.stacks_block_height = block_info.stacks_block_height
            blockInfoItem.btc_block_height = block_info.burn_chain_height
            blockInfoItem.winner_stx_address = block_info.stx_address
            blockInfoItem.winner_btc_address = block_info.btc_address
            blockInfoItem.block_reward = block_info.block_reward
            blockInfoItem.tx_reward = parseFloat(block_info.tx_reward)
            blockInfoItem.commit_value = parseInt(block_info.burn_fee)
            blockInfoItem.winner_to_all_commit = { data : []}
            // item.timestamp

            // commit_info
            let commitInfoItemsRecord: Record<string, Commit_Info_Insert_Input> = {}

            for (let commit_info_key in commit_info){
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
                let d = await getTransactionFromBtcRpc(item.txid)
                commitGasInfoItem.commit_btc_tx_id = item.txid
                commitGasInfoItem.commit_btc_gas_fee = d - commitInfoItem.commit_value
                commitGasInfoItem.stacks_block_height = blockInfoItem.stacks_block_height
                commitGasInfoItem.btc_address = commitInfoItem.btc_address
                commitGasInfoItem.stx_address = commitInfoItem.stx_address

                commitInfoItem.commit_info_to_commit_gas.data = commitGasInfoItem

            }
            rowsToImport.push(blockInfoItem)
        }

        console.log(rowsToImport)
        await importBlockInfos(rowsToImport)
    }


    // handle graphql insert

}







//
// (async () => {
//     let a = await fetchLatestBlock()
//     console.log(a.block_info[0].stacks_block_height)
//     //let d = await getTransactionFromBtcRpc("2c8adfc0d8f0b6a73cecfe7237941e4f7bde43c50d6ec2aa8d6d6f08777ebe67")
//     //console.log(d)
// }) ()


setInterval(importMiningData, 600000)
importMiningData().then(r => console.log(r))