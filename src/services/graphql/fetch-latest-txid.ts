
import {graphClient} from "../../common/graphql-client";

export async function fetchLatestTxId() {
    return await graphClient.queryLatestTxId();

}
