// import {importData} from "./mining-importer";
import {getMinerInfo, getTransactionFromBtcRpc} from "./mining-test";
import axios from "axios";
import {graphClient} from "../common/graphql-client";

/*
(async () => {
    await getTransactionFromBtcRpc("efb6647421dac370e5084e2bdd4ae6da9ec0619bf2acd9b0cc762b5443a16502")

}) ()

 */


(async () => {

    let miningInfo = await getMinerInfo(44980, 718537)
    console.log(miningInfo.winner_info)
    console.log(miningInfo.block_commits)
    // let resp = await graphClient.DeleteMinerInfo()
    // console.log(resp.delete_miner_info.returning)
}) ()

