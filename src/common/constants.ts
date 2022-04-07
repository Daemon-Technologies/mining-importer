import dotenv from 'dotenv';

dotenv.config();
export const HASURA_URL = process.env.HASURA_URL;
export const HASURA_ADMIN_KEY = process.env.HASURA_ADMIN_KEY;
export const STACKS_NODE_SQLITE_PATH = process.env.DATA_ROOT_PATH;
export const DELTA_HEIGHT = process.env.DELTA_HEIGHT;
export const BTC_RPC_ENDPOINT = process.env.BTC_RPC_ENDPOINT;
export const INTERVAL_TIME_CONFIG = process.env.INTERVAL_TIME_CONFIG;
export const INTERVAL_TIME_MINING= process.env.INTERVAL_TIME_MINING;
export const BINANCE_BASE_URL= 'https://api.binance.com/api/v3';
export const BLOCKCHAIN_INFO_BASE_URL= 'https://api.blockchain.info';
