
import {graphClient} from "../../common/graphql-client";

export async function fetchLatestBlock() {
    return await graphClient.queryLatestBlockHeight();

}