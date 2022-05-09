import axios from "axios";
import {BINANCE_BASE_URL} from "../common/constants";

export const binanceApi = axios.create({
    baseURL: BINANCE_BASE_URL,
});

const tickerPriceUrl = (coinPair: string) => `/ticker/price?symbol=${coinPair}`;

export const getStxPrice = async () => {
    try {
        const response = await binanceApi.get(tickerPriceUrl('STXUSDT'));
        return response.data?.price;
    } catch (e) {
        throw Error(`Cant Fetch latest Stx Price ${e}`);
    }
}
export const getBtcPrice = async () => {
    try {
        const response = await binanceApi.get(tickerPriceUrl('BTCUSDT'));
        return response.data?.price;
    } catch (e) {
        throw Error(`Cant Fetch latest BTC Price ${e}`);
    }
}
