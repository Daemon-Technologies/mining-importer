export const getBurnChainOps = `SELECT * FROM burnchain_db_block_ops WHERE rowid > (SELECT rowid FROM burnchain_db_block_ops WHERE txid = '')`
