import {INTERVAL_TIME_CONFIG, INTERVAL_TIME_MINING} from "./common/constants";
import {importMiningData } from "./script/block";
import {updateHashPower, updateTokenPrice} from "./script/config";

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


