// import {importData} from "./mining-importer";
import {getMinerInfo, getTransactionFromBtcRpc} from "./mining-test";
import axios from "axios";
import {graphClient} from "../common/graphql-client";
/*
(async () => {
    let url = 'http://daemontech2:daemontech2@47.242.123.146:8332/'

    const response = await axios({
        method: 'post',
        url: url,
        data: {

                "jsonrpc": "1.0",
                "id": "curltest",
                "method": "gettransaction",
                "params": ["593c45f20f60b3eabd58303d844fc4c468a1f5393d1a15d1d379a2e3c1cf3693", true]

        }
    })
    console.log(response)
})();

 */
// interface testInter {
//     name : string
//     value : string
// }
//
// function hi(param: testInter){
//     console.log(param.name)
// }

//let a: testInter = {name: "gavin", value: "hello"}

// @ts-ignore
//hi(a)







/*
(async function b(){
    await afunc()
} ())
∂
 */

(async () => {
    await getTransactionFromBtcRpc("efb6647421dac370e5084e2bdd4ae6da9ec0619bf2acd9b0cc762b5443a16502")

}) ()

/*
(async () => {

    let miningInfo = await getMinerInfo(44980, 718537)
    console.log(miningInfo.winner_info)
    console.log(miningInfo.block_commits)
    // let resp = await graphClient.DeleteMinerInfo()
    // console.log(resp.delete_miner_info.returning)
}) ()

 */