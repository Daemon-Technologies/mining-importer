export const getAllPayments = (stacksBlockHeight: number, deltaHeight: number) =>  `SELECT * FROM payments WHERE stacks_block_height > ${stacksBlockHeight} AND stacks_block_height <= ${stacksBlockHeight+deltaHeight} order by stacks_block_height`;

export const getAllBlockHeaders = (stacksBlockHeight: number, deltaHeight: number) => `SELECT * FROM block_headers WHERE block_height > ${stacksBlockHeight} AND block_height <= ${stacksBlockHeight+deltaHeight} order by block_height`;
