import {getBtcPrice, getStxPrice} from "../connections/binance";
import {Config_Insert_Input} from "../../graphql/node-types";
import {importConfigItem} from "../services/graphql/import-config-item";
import {blockchainInfo} from "../connections/blockchainInfo";

export async function updateTokenPrice(){
    try {
        const stxPrice = await getStxPrice();
        const btcPrice = await getBtcPrice();
        console.log(stxPrice)
        console.log(btcPrice)
        if (stxPrice != undefined && btcPrice != undefined){
            let rows :Config_Insert_Input[] = []
            let stx_row : Config_Insert_Input = {
                name: "stx_price",
                value: stxPrice,
                comment: "stx price"
            }
            let btc_row : Config_Insert_Input = {
                name: "btc_price",
                value: btcPrice,
                comment: "btc price"
            }
            rows.push(stx_row)
            rows.push(btc_row)
            await importConfigItem(rows)
        }
    } catch (error){
        throw (error);
    }
}

export const updateHashPower = async() => {
        try {
            const res = await blockchainInfo.get('/stats');
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
            }
        } catch (error) {
            console.log(error);
            throw (error);
        }
}
