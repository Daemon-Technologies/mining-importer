import {Block_Info_Insert_Input} from "../../../graphql/node-types";
import {graphClient} from "../../common/graphql-client";

export async function fetchBurnchainOpsRowid() {
    return await graphClient.queryBurnchainOpsRowid();
}