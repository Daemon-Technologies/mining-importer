import {importMiningData } from "./script/block";
import {updateHashPower, updateTokenPrice} from "./script/config";
import cron from 'node-cron';


cron.schedule('* * * * *', async function() {
    console.log('here');
    await updateTokenPrice()
    await updateHashPower();
});




cron.schedule('0 */5 * * *', async function() {
    await importMiningData();
});


