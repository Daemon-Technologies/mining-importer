export const getAllBlocks = (burnBlockHeight: number, deltaHeight: number) =>  `SELECT * FROM snapshots WHERE block_height > ${burnBlockHeight} AND block_height <= ${burnBlockHeight+deltaHeight} order by block_height desc`;

export const getLeaderKeys = (burnBlockHeight: number, deltaHeight: number) => `SELECT * FROM leader_keys WHERE block_height > ${burnBlockHeight} AND block_height <= ${burnBlockHeight+deltaHeight}`

export  const getAllBlockCommits= (burnBlockHeight: number, deltaHeight: number) => `SELECT * FROM block_commits WHERE block_height > ${burnBlockHeight} AND block_height <= ${burnBlockHeight + deltaHeight} order by block_height`;
