import {Block_Info_Insert_Input, Config_Insert_Input} from "../../../graphql/node-types";
import {graphClient} from "../../common/graphql-client";

export async function importConfigItem(rows: Config_Insert_Input[]) {

    // import them!
    if (rows.length) {
        console.log(`inserting ${rows.length} config item`);
        await graphClient.updateConfigItem({ rows });
    }
}