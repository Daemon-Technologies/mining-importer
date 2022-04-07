import axios from "axios";
import {BTC_RPC_ENDPOINT} from "../common/constants";

export const btcRpc = axios.create({
    baseURL: BTC_RPC_ENDPOINT,
});

enum BTC_RPC_METHODS {
    GET_RAW_TRANSACTION= 'getrawtransaction'
}

export const fetchBtcRpcData = async (method: BTC_RPC_METHODS, params: any[]) => {
    try {
        return await btcRpc.post(BTC_RPC_ENDPOINT, {
            jsonrpc: "1.0",
            id: "curltest",
            method,
            params,
        })
    } catch (e) {
        console.error(e);
    }
}


export const getRawTransaction =  async  (transactionId: string) => {
    try {
        const response = await fetchBtcRpcData(BTC_RPC_METHODS.GET_RAW_TRANSACTION, [transactionId, true]);
        return {response, error: undefined}
    } catch (e) {
        return  {response: undefined, error: e}
    }
}

