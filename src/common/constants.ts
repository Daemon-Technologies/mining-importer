import dotenv from 'dotenv';

dotenv.config();
export const HASURA_URL = process.env.HASURA_URL;
export const HASURA_ADMIN_KEY = process.env.HASURA_ADMIN_KEY;
export const STACKS_NODE_SQLITE_PATH = process.env.DATA_ROOT_PATH;
export const DELTA_HEIGHT = process.env.DELTA_HEIGHT
export const BTC_RPC_ENDPOINT = process.env.BTC_RPC_ENDPOINT
