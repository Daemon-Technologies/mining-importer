import axios from "axios";
import {BLOCKCHAIN_INFO_BASE_URL} from "../common/constants";

export const blockchainInfo = axios.create({
    baseURL: BLOCKCHAIN_INFO_BASE_URL,
});
