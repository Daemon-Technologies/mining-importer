import {Block_Info_Insert_Input} from "../../../graphql/node-types";
import {graphClient} from "../../common/graphql-client";

/**
 * Import blocks into the db
 */
export async function importBlockInfos(rows: Block_Info_Insert_Input[]) {

    // import them!
    if (rows.length) {
        console.log(`inserting ${rows.length} block info items`);
        await graphClient.insertBlockInfos({ rows });
    }
}