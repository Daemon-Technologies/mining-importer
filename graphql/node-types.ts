import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  timetz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "block_info" */
export type Block_Info = {
  __typename?: 'block_info';
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value: Scalars['Int'];
  stacks_block_height: Scalars['Int'];
  timestamp?: Maybe<Scalars['timetz']>;
  tx_reward?: Maybe<Scalars['float8']>;
  winner_btc_address: Scalars['String'];
  winner_stx_address: Scalars['String'];
  /** An array relationship */
  winner_to_all_commit: Array<Commit_Info>;
  /** An aggregate relationship */
  winner_to_all_commit_aggregate: Commit_Info_Aggregate;
};


/** columns and relationships of "block_info" */
export type Block_InfoWinner_To_All_CommitArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};


/** columns and relationships of "block_info" */
export type Block_InfoWinner_To_All_Commit_AggregateArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};

/** aggregated selection of "block_info" */
export type Block_Info_Aggregate = {
  __typename?: 'block_info_aggregate';
  aggregate?: Maybe<Block_Info_Aggregate_Fields>;
  nodes: Array<Block_Info>;
};

/** aggregate fields of "block_info" */
export type Block_Info_Aggregate_Fields = {
  __typename?: 'block_info_aggregate_fields';
  avg?: Maybe<Block_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Info_Max_Fields>;
  min?: Maybe<Block_Info_Min_Fields>;
  stddev?: Maybe<Block_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Info_Sum_Fields>;
  var_pop?: Maybe<Block_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Info_Var_Samp_Fields>;
  variance?: Maybe<Block_Info_Variance_Fields>;
};


/** aggregate fields of "block_info" */
export type Block_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Block_Info_Avg_Fields = {
  __typename?: 'block_info_avg_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block_info". All fields are combined with a logical 'AND'. */
export type Block_Info_Bool_Exp = {
  _and?: Maybe<Array<Block_Info_Bool_Exp>>;
  _not?: Maybe<Block_Info_Bool_Exp>;
  _or?: Maybe<Array<Block_Info_Bool_Exp>>;
  block_reward?: Maybe<Float8_Comparison_Exp>;
  btc_block_height?: Maybe<Int_Comparison_Exp>;
  commit_value?: Maybe<Int_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  timestamp?: Maybe<Timetz_Comparison_Exp>;
  tx_reward?: Maybe<Float8_Comparison_Exp>;
  winner_btc_address?: Maybe<String_Comparison_Exp>;
  winner_stx_address?: Maybe<String_Comparison_Exp>;
  winner_to_all_commit?: Maybe<Commit_Info_Bool_Exp>;
};

/** unique or primary key constraints on table "block_info" */
export enum Block_Info_Constraint {
  /** unique or primary key constraint */
  BlockInfoPkey = 'block_info_pkey',
  /** unique or primary key constraint */
  BlockInfoStacksBlockHeightKey = 'block_info_stacks_block_height_key'
}

/** input type for incrementing numeric columns in table "block_info" */
export type Block_Info_Inc_Input = {
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  tx_reward?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "block_info" */
export type Block_Info_Insert_Input = {
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timetz']>;
  tx_reward?: Maybe<Scalars['float8']>;
  winner_btc_address?: Maybe<Scalars['String']>;
  winner_stx_address?: Maybe<Scalars['String']>;
  winner_to_all_commit?: Maybe<Commit_Info_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Block_Info_Max_Fields = {
  __typename?: 'block_info_max_fields';
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timetz']>;
  tx_reward?: Maybe<Scalars['float8']>;
  winner_btc_address?: Maybe<Scalars['String']>;
  winner_stx_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Block_Info_Min_Fields = {
  __typename?: 'block_info_min_fields';
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timetz']>;
  tx_reward?: Maybe<Scalars['float8']>;
  winner_btc_address?: Maybe<Scalars['String']>;
  winner_stx_address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "block_info" */
export type Block_Info_Mutation_Response = {
  __typename?: 'block_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Block_Info>;
};

/** on_conflict condition type for table "block_info" */
export type Block_Info_On_Conflict = {
  constraint: Block_Info_Constraint;
  update_columns?: Array<Block_Info_Update_Column>;
  where?: Maybe<Block_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "block_info". */
export type Block_Info_Order_By = {
  block_reward?: Maybe<Order_By>;
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  tx_reward?: Maybe<Order_By>;
  winner_btc_address?: Maybe<Order_By>;
  winner_stx_address?: Maybe<Order_By>;
  winner_to_all_commit_aggregate?: Maybe<Commit_Info_Aggregate_Order_By>;
};

/** primary key columns input for table: block_info */
export type Block_Info_Pk_Columns_Input = {
  stacks_block_height: Scalars['Int'];
};

/** select columns of table "block_info" */
export enum Block_Info_Select_Column {
  /** column name */
  BlockReward = 'block_reward',
  /** column name */
  BtcBlockHeight = 'btc_block_height',
  /** column name */
  CommitValue = 'commit_value',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TxReward = 'tx_reward',
  /** column name */
  WinnerBtcAddress = 'winner_btc_address',
  /** column name */
  WinnerStxAddress = 'winner_stx_address'
}

/** input type for updating data in table "block_info" */
export type Block_Info_Set_Input = {
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timetz']>;
  tx_reward?: Maybe<Scalars['float8']>;
  winner_btc_address?: Maybe<Scalars['String']>;
  winner_stx_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Block_Info_Stddev_Fields = {
  __typename?: 'block_info_stddev_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Info_Stddev_Pop_Fields = {
  __typename?: 'block_info_stddev_pop_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Info_Stddev_Samp_Fields = {
  __typename?: 'block_info_stddev_samp_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Info_Sum_Fields = {
  __typename?: 'block_info_sum_fields';
  block_reward?: Maybe<Scalars['float8']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  tx_reward?: Maybe<Scalars['float8']>;
};

/** update columns of table "block_info" */
export enum Block_Info_Update_Column {
  /** column name */
  BlockReward = 'block_reward',
  /** column name */
  BtcBlockHeight = 'btc_block_height',
  /** column name */
  CommitValue = 'commit_value',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TxReward = 'tx_reward',
  /** column name */
  WinnerBtcAddress = 'winner_btc_address',
  /** column name */
  WinnerStxAddress = 'winner_stx_address'
}

/** aggregate var_pop on columns */
export type Block_Info_Var_Pop_Fields = {
  __typename?: 'block_info_var_pop_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Info_Var_Samp_Fields = {
  __typename?: 'block_info_var_samp_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Info_Variance_Fields = {
  __typename?: 'block_info_variance_fields';
  block_reward?: Maybe<Scalars['Float']>;
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "commit_gas_info" */
export type Commit_Gas_Info = {
  __typename?: 'commit_gas_info';
  btc_address: Scalars['String'];
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  commit_btc_tx_id: Scalars['String'];
  stacks_block_height: Scalars['Int'];
  stx_address: Scalars['String'];
};

/** aggregated selection of "commit_gas_info" */
export type Commit_Gas_Info_Aggregate = {
  __typename?: 'commit_gas_info_aggregate';
  aggregate?: Maybe<Commit_Gas_Info_Aggregate_Fields>;
  nodes: Array<Commit_Gas_Info>;
};

/** aggregate fields of "commit_gas_info" */
export type Commit_Gas_Info_Aggregate_Fields = {
  __typename?: 'commit_gas_info_aggregate_fields';
  avg?: Maybe<Commit_Gas_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Commit_Gas_Info_Max_Fields>;
  min?: Maybe<Commit_Gas_Info_Min_Fields>;
  stddev?: Maybe<Commit_Gas_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Commit_Gas_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commit_Gas_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Commit_Gas_Info_Sum_Fields>;
  var_pop?: Maybe<Commit_Gas_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Commit_Gas_Info_Var_Samp_Fields>;
  variance?: Maybe<Commit_Gas_Info_Variance_Fields>;
};


/** aggregate fields of "commit_gas_info" */
export type Commit_Gas_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Commit_Gas_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Commit_Gas_Info_Avg_Fields = {
  __typename?: 'commit_gas_info_avg_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "commit_gas_info". All fields are combined with a logical 'AND'. */
export type Commit_Gas_Info_Bool_Exp = {
  _and?: Maybe<Array<Commit_Gas_Info_Bool_Exp>>;
  _not?: Maybe<Commit_Gas_Info_Bool_Exp>;
  _or?: Maybe<Array<Commit_Gas_Info_Bool_Exp>>;
  btc_address?: Maybe<String_Comparison_Exp>;
  commit_btc_gas_fee?: Maybe<Int_Comparison_Exp>;
  commit_btc_tx_id?: Maybe<String_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  stx_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "commit_gas_info" */
export enum Commit_Gas_Info_Constraint {
  /** unique or primary key constraint */
  CommitInfoCommitBtcTxIdKey = 'commit_info_commit_btc_tx_id_key',
  /** unique or primary key constraint */
  MinerInfoPkey = 'miner_info_pkey'
}

/** input type for incrementing numeric columns in table "commit_gas_info" */
export type Commit_Gas_Info_Inc_Input = {
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "commit_gas_info" */
export type Commit_Gas_Info_Insert_Input = {
  btc_address?: Maybe<Scalars['String']>;
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Commit_Gas_Info_Max_Fields = {
  __typename?: 'commit_gas_info_max_fields';
  btc_address?: Maybe<Scalars['String']>;
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Commit_Gas_Info_Min_Fields = {
  __typename?: 'commit_gas_info_min_fields';
  btc_address?: Maybe<Scalars['String']>;
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "commit_gas_info" */
export type Commit_Gas_Info_Mutation_Response = {
  __typename?: 'commit_gas_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Commit_Gas_Info>;
};

/** input type for inserting object relation for remote table "commit_gas_info" */
export type Commit_Gas_Info_Obj_Rel_Insert_Input = {
  data: Commit_Gas_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Commit_Gas_Info_On_Conflict>;
};

/** on_conflict condition type for table "commit_gas_info" */
export type Commit_Gas_Info_On_Conflict = {
  constraint: Commit_Gas_Info_Constraint;
  update_columns?: Array<Commit_Gas_Info_Update_Column>;
  where?: Maybe<Commit_Gas_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "commit_gas_info". */
export type Commit_Gas_Info_Order_By = {
  btc_address?: Maybe<Order_By>;
  commit_btc_gas_fee?: Maybe<Order_By>;
  commit_btc_tx_id?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
};

/** primary key columns input for table: commit_gas_info */
export type Commit_Gas_Info_Pk_Columns_Input = {
  commit_btc_tx_id: Scalars['String'];
};

/** select columns of table "commit_gas_info" */
export enum Commit_Gas_Info_Select_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  CommitBtcGasFee = 'commit_btc_gas_fee',
  /** column name */
  CommitBtcTxId = 'commit_btc_tx_id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** input type for updating data in table "commit_gas_info" */
export type Commit_Gas_Info_Set_Input = {
  btc_address?: Maybe<Scalars['String']>;
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Commit_Gas_Info_Stddev_Fields = {
  __typename?: 'commit_gas_info_stddev_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Commit_Gas_Info_Stddev_Pop_Fields = {
  __typename?: 'commit_gas_info_stddev_pop_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Commit_Gas_Info_Stddev_Samp_Fields = {
  __typename?: 'commit_gas_info_stddev_samp_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Commit_Gas_Info_Sum_Fields = {
  __typename?: 'commit_gas_info_sum_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** update columns of table "commit_gas_info" */
export enum Commit_Gas_Info_Update_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  CommitBtcGasFee = 'commit_btc_gas_fee',
  /** column name */
  CommitBtcTxId = 'commit_btc_tx_id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** aggregate var_pop on columns */
export type Commit_Gas_Info_Var_Pop_Fields = {
  __typename?: 'commit_gas_info_var_pop_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Commit_Gas_Info_Var_Samp_Fields = {
  __typename?: 'commit_gas_info_var_samp_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Commit_Gas_Info_Variance_Fields = {
  __typename?: 'commit_gas_info_variance_fields';
  commit_btc_gas_fee?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "commit_info" */
export type Commit_Info = {
  __typename?: 'commit_info';
  btc_address: Scalars['String'];
  btc_block_height: Scalars['Int'];
  commit_btc_tx_id: Scalars['String'];
  /** An object relationship */
  commit_info_to_commit_gas?: Maybe<Commit_Gas_Info>;
  commit_value: Scalars['Int'];
  is_winner: Scalars['Boolean'];
  stacks_block_height: Scalars['Int'];
  stx_address: Scalars['String'];
};

/** aggregated selection of "commit_info" */
export type Commit_Info_Aggregate = {
  __typename?: 'commit_info_aggregate';
  aggregate?: Maybe<Commit_Info_Aggregate_Fields>;
  nodes: Array<Commit_Info>;
};

/** aggregate fields of "commit_info" */
export type Commit_Info_Aggregate_Fields = {
  __typename?: 'commit_info_aggregate_fields';
  avg?: Maybe<Commit_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Commit_Info_Max_Fields>;
  min?: Maybe<Commit_Info_Min_Fields>;
  stddev?: Maybe<Commit_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Commit_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commit_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Commit_Info_Sum_Fields>;
  var_pop?: Maybe<Commit_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Commit_Info_Var_Samp_Fields>;
  variance?: Maybe<Commit_Info_Variance_Fields>;
};


/** aggregate fields of "commit_info" */
export type Commit_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Commit_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "commit_info" */
export type Commit_Info_Aggregate_Order_By = {
  avg?: Maybe<Commit_Info_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Commit_Info_Max_Order_By>;
  min?: Maybe<Commit_Info_Min_Order_By>;
  stddev?: Maybe<Commit_Info_Stddev_Order_By>;
  stddev_pop?: Maybe<Commit_Info_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Commit_Info_Stddev_Samp_Order_By>;
  sum?: Maybe<Commit_Info_Sum_Order_By>;
  var_pop?: Maybe<Commit_Info_Var_Pop_Order_By>;
  var_samp?: Maybe<Commit_Info_Var_Samp_Order_By>;
  variance?: Maybe<Commit_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "commit_info" */
export type Commit_Info_Arr_Rel_Insert_Input = {
  data: Array<Commit_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Commit_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Commit_Info_Avg_Fields = {
  __typename?: 'commit_info_avg_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "commit_info" */
export type Commit_Info_Avg_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "commit_info". All fields are combined with a logical 'AND'. */
export type Commit_Info_Bool_Exp = {
  _and?: Maybe<Array<Commit_Info_Bool_Exp>>;
  _not?: Maybe<Commit_Info_Bool_Exp>;
  _or?: Maybe<Array<Commit_Info_Bool_Exp>>;
  btc_address?: Maybe<String_Comparison_Exp>;
  btc_block_height?: Maybe<Int_Comparison_Exp>;
  commit_btc_tx_id?: Maybe<String_Comparison_Exp>;
  commit_info_to_commit_gas?: Maybe<Commit_Gas_Info_Bool_Exp>;
  commit_value?: Maybe<Int_Comparison_Exp>;
  is_winner?: Maybe<Boolean_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  stx_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "commit_info" */
export enum Commit_Info_Constraint {
  /** unique or primary key constraint */
  CommitInfoCommitBtcTxIdKey1 = 'commit_info_commit_btc_tx_id_key1',
  /** unique or primary key constraint */
  CommitInfoPkey = 'commit_info_pkey'
}

/** input type for incrementing numeric columns in table "commit_info" */
export type Commit_Info_Inc_Input = {
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "commit_info" */
export type Commit_Info_Insert_Input = {
  btc_address?: Maybe<Scalars['String']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  commit_info_to_commit_gas?: Maybe<Commit_Gas_Info_Obj_Rel_Insert_Input>;
  commit_value?: Maybe<Scalars['Int']>;
  is_winner?: Maybe<Scalars['Boolean']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Commit_Info_Max_Fields = {
  __typename?: 'commit_info_max_fields';
  btc_address?: Maybe<Scalars['String']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "commit_info" */
export type Commit_Info_Max_Order_By = {
  btc_address?: Maybe<Order_By>;
  btc_block_height?: Maybe<Order_By>;
  commit_btc_tx_id?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Commit_Info_Min_Fields = {
  __typename?: 'commit_info_min_fields';
  btc_address?: Maybe<Scalars['String']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "commit_info" */
export type Commit_Info_Min_Order_By = {
  btc_address?: Maybe<Order_By>;
  btc_block_height?: Maybe<Order_By>;
  commit_btc_tx_id?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "commit_info" */
export type Commit_Info_Mutation_Response = {
  __typename?: 'commit_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Commit_Info>;
};

/** on_conflict condition type for table "commit_info" */
export type Commit_Info_On_Conflict = {
  constraint: Commit_Info_Constraint;
  update_columns?: Array<Commit_Info_Update_Column>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "commit_info". */
export type Commit_Info_Order_By = {
  btc_address?: Maybe<Order_By>;
  btc_block_height?: Maybe<Order_By>;
  commit_btc_tx_id?: Maybe<Order_By>;
  commit_info_to_commit_gas?: Maybe<Commit_Gas_Info_Order_By>;
  commit_value?: Maybe<Order_By>;
  is_winner?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
};

/** primary key columns input for table: commit_info */
export type Commit_Info_Pk_Columns_Input = {
  commit_btc_tx_id: Scalars['String'];
};

/** select columns of table "commit_info" */
export enum Commit_Info_Select_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BtcBlockHeight = 'btc_block_height',
  /** column name */
  CommitBtcTxId = 'commit_btc_tx_id',
  /** column name */
  CommitValue = 'commit_value',
  /** column name */
  IsWinner = 'is_winner',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** input type for updating data in table "commit_info" */
export type Commit_Info_Set_Input = {
  btc_address?: Maybe<Scalars['String']>;
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_btc_tx_id?: Maybe<Scalars['String']>;
  commit_value?: Maybe<Scalars['Int']>;
  is_winner?: Maybe<Scalars['Boolean']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Commit_Info_Stddev_Fields = {
  __typename?: 'commit_info_stddev_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "commit_info" */
export type Commit_Info_Stddev_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Commit_Info_Stddev_Pop_Fields = {
  __typename?: 'commit_info_stddev_pop_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "commit_info" */
export type Commit_Info_Stddev_Pop_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Commit_Info_Stddev_Samp_Fields = {
  __typename?: 'commit_info_stddev_samp_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "commit_info" */
export type Commit_Info_Stddev_Samp_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Commit_Info_Sum_Fields = {
  __typename?: 'commit_info_sum_fields';
  btc_block_height?: Maybe<Scalars['Int']>;
  commit_value?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "commit_info" */
export type Commit_Info_Sum_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** update columns of table "commit_info" */
export enum Commit_Info_Update_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BtcBlockHeight = 'btc_block_height',
  /** column name */
  CommitBtcTxId = 'commit_btc_tx_id',
  /** column name */
  CommitValue = 'commit_value',
  /** column name */
  IsWinner = 'is_winner',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** aggregate var_pop on columns */
export type Commit_Info_Var_Pop_Fields = {
  __typename?: 'commit_info_var_pop_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "commit_info" */
export type Commit_Info_Var_Pop_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Commit_Info_Var_Samp_Fields = {
  __typename?: 'commit_info_var_samp_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "commit_info" */
export type Commit_Info_Var_Samp_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Commit_Info_Variance_Fields = {
  __typename?: 'commit_info_variance_fields';
  btc_block_height?: Maybe<Scalars['Float']>;
  commit_value?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "commit_info" */
export type Commit_Info_Variance_Order_By = {
  btc_block_height?: Maybe<Order_By>;
  commit_value?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
};

/** columns and relationships of "config" */
export type Config = {
  __typename?: 'config';
  comment: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "config" */
export type Config_Aggregate = {
  __typename?: 'config_aggregate';
  aggregate?: Maybe<Config_Aggregate_Fields>;
  nodes: Array<Config>;
};

/** aggregate fields of "config" */
export type Config_Aggregate_Fields = {
  __typename?: 'config_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Config_Max_Fields>;
  min?: Maybe<Config_Min_Fields>;
};


/** aggregate fields of "config" */
export type Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "config". All fields are combined with a logical 'AND'. */
export type Config_Bool_Exp = {
  _and?: Maybe<Array<Config_Bool_Exp>>;
  _not?: Maybe<Config_Bool_Exp>;
  _or?: Maybe<Array<Config_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "config" */
export enum Config_Constraint {
  /** unique or primary key constraint */
  ConfigPkey = 'config_pkey'
}

/** input type for inserting data into table "config" */
export type Config_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Config_Max_Fields = {
  __typename?: 'config_max_fields';
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Config_Min_Fields = {
  __typename?: 'config_min_fields';
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "config" */
export type Config_Mutation_Response = {
  __typename?: 'config_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Config>;
};

/** on_conflict condition type for table "config" */
export type Config_On_Conflict = {
  constraint: Config_Constraint;
  update_columns?: Array<Config_Update_Column>;
  where?: Maybe<Config_Bool_Exp>;
};

/** Ordering options when selecting data from "config". */
export type Config_Order_By = {
  comment?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: config */
export type Config_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "config" */
export enum Config_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "config" */
export type Config_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "config" */
export enum Config_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "block_info" */
  delete_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** delete single row from the table: "block_info" */
  delete_block_info_by_pk?: Maybe<Block_Info>;
  /** delete data from the table: "commit_gas_info" */
  delete_commit_gas_info?: Maybe<Commit_Gas_Info_Mutation_Response>;
  /** delete single row from the table: "commit_gas_info" */
  delete_commit_gas_info_by_pk?: Maybe<Commit_Gas_Info>;
  /** delete data from the table: "commit_info" */
  delete_commit_info?: Maybe<Commit_Info_Mutation_Response>;
  /** delete single row from the table: "commit_info" */
  delete_commit_info_by_pk?: Maybe<Commit_Info>;
  /** delete data from the table: "config" */
  delete_config?: Maybe<Config_Mutation_Response>;
  /** delete single row from the table: "config" */
  delete_config_by_pk?: Maybe<Config>;
  /** insert data into the table: "block_info" */
  insert_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** insert a single row into the table: "block_info" */
  insert_block_info_one?: Maybe<Block_Info>;
  /** insert data into the table: "commit_gas_info" */
  insert_commit_gas_info?: Maybe<Commit_Gas_Info_Mutation_Response>;
  /** insert a single row into the table: "commit_gas_info" */
  insert_commit_gas_info_one?: Maybe<Commit_Gas_Info>;
  /** insert data into the table: "commit_info" */
  insert_commit_info?: Maybe<Commit_Info_Mutation_Response>;
  /** insert a single row into the table: "commit_info" */
  insert_commit_info_one?: Maybe<Commit_Info>;
  /** insert data into the table: "config" */
  insert_config?: Maybe<Config_Mutation_Response>;
  /** insert a single row into the table: "config" */
  insert_config_one?: Maybe<Config>;
  /** update data of the table: "block_info" */
  update_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** update single row of the table: "block_info" */
  update_block_info_by_pk?: Maybe<Block_Info>;
  /** update data of the table: "commit_gas_info" */
  update_commit_gas_info?: Maybe<Commit_Gas_Info_Mutation_Response>;
  /** update single row of the table: "commit_gas_info" */
  update_commit_gas_info_by_pk?: Maybe<Commit_Gas_Info>;
  /** update data of the table: "commit_info" */
  update_commit_info?: Maybe<Commit_Info_Mutation_Response>;
  /** update single row of the table: "commit_info" */
  update_commit_info_by_pk?: Maybe<Commit_Info>;
  /** update data of the table: "config" */
  update_config?: Maybe<Config_Mutation_Response>;
  /** update single row of the table: "config" */
  update_config_by_pk?: Maybe<Config>;
};


/** mutation root */
export type Mutation_RootDelete_Block_InfoArgs = {
  where: Block_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_Info_By_PkArgs = {
  stacks_block_height: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Commit_Gas_InfoArgs = {
  where: Commit_Gas_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commit_Gas_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Commit_InfoArgs = {
  where: Commit_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commit_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ConfigArgs = {
  where: Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Config_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Block_InfoArgs = {
  objects: Array<Block_Info_Insert_Input>;
  on_conflict?: Maybe<Block_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Block_Info_OneArgs = {
  object: Block_Info_Insert_Input;
  on_conflict?: Maybe<Block_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commit_Gas_InfoArgs = {
  objects: Array<Commit_Gas_Info_Insert_Input>;
  on_conflict?: Maybe<Commit_Gas_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commit_Gas_Info_OneArgs = {
  object: Commit_Gas_Info_Insert_Input;
  on_conflict?: Maybe<Commit_Gas_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commit_InfoArgs = {
  objects: Array<Commit_Info_Insert_Input>;
  on_conflict?: Maybe<Commit_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commit_Info_OneArgs = {
  object: Commit_Info_Insert_Input;
  on_conflict?: Maybe<Commit_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConfigArgs = {
  objects: Array<Config_Insert_Input>;
  on_conflict?: Maybe<Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Config_OneArgs = {
  object: Config_Insert_Input;
  on_conflict?: Maybe<Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Block_InfoArgs = {
  _inc?: Maybe<Block_Info_Inc_Input>;
  _set?: Maybe<Block_Info_Set_Input>;
  where: Block_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Block_Info_By_PkArgs = {
  _inc?: Maybe<Block_Info_Inc_Input>;
  _set?: Maybe<Block_Info_Set_Input>;
  pk_columns: Block_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Commit_Gas_InfoArgs = {
  _inc?: Maybe<Commit_Gas_Info_Inc_Input>;
  _set?: Maybe<Commit_Gas_Info_Set_Input>;
  where: Commit_Gas_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commit_Gas_Info_By_PkArgs = {
  _inc?: Maybe<Commit_Gas_Info_Inc_Input>;
  _set?: Maybe<Commit_Gas_Info_Set_Input>;
  pk_columns: Commit_Gas_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Commit_InfoArgs = {
  _inc?: Maybe<Commit_Info_Inc_Input>;
  _set?: Maybe<Commit_Info_Set_Input>;
  where: Commit_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commit_Info_By_PkArgs = {
  _inc?: Maybe<Commit_Info_Inc_Input>;
  _set?: Maybe<Commit_Info_Set_Input>;
  pk_columns: Commit_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigArgs = {
  _set?: Maybe<Config_Set_Input>;
  where: Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Config_By_PkArgs = {
  _set?: Maybe<Config_Set_Input>;
  pk_columns: Config_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "block_info" */
  block_info: Array<Block_Info>;
  /** fetch aggregated fields from the table: "block_info" */
  block_info_aggregate: Block_Info_Aggregate;
  /** fetch data from the table: "block_info" using primary key columns */
  block_info_by_pk?: Maybe<Block_Info>;
  /** fetch data from the table: "commit_gas_info" */
  commit_gas_info: Array<Commit_Gas_Info>;
  /** fetch aggregated fields from the table: "commit_gas_info" */
  commit_gas_info_aggregate: Commit_Gas_Info_Aggregate;
  /** fetch data from the table: "commit_gas_info" using primary key columns */
  commit_gas_info_by_pk?: Maybe<Commit_Gas_Info>;
  /** fetch data from the table: "commit_info" */
  commit_info: Array<Commit_Info>;
  /** fetch aggregated fields from the table: "commit_info" */
  commit_info_aggregate: Commit_Info_Aggregate;
  /** fetch data from the table: "commit_info" using primary key columns */
  commit_info_by_pk?: Maybe<Commit_Info>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
};


export type Query_RootBlock_InfoArgs = {
  distinct_on?: Maybe<Array<Block_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Info_Order_By>>;
  where?: Maybe<Block_Info_Bool_Exp>;
};


export type Query_RootBlock_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Info_Order_By>>;
  where?: Maybe<Block_Info_Bool_Exp>;
};


export type Query_RootBlock_Info_By_PkArgs = {
  stacks_block_height: Scalars['Int'];
};


export type Query_RootCommit_Gas_InfoArgs = {
  distinct_on?: Maybe<Array<Commit_Gas_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Gas_Info_Order_By>>;
  where?: Maybe<Commit_Gas_Info_Bool_Exp>;
};


export type Query_RootCommit_Gas_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Commit_Gas_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Gas_Info_Order_By>>;
  where?: Maybe<Commit_Gas_Info_Bool_Exp>;
};


export type Query_RootCommit_Gas_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


export type Query_RootCommit_InfoArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};


export type Query_RootCommit_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};


export type Query_RootCommit_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


export type Query_RootConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


export type Query_RootConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


export type Query_RootConfig_By_PkArgs = {
  name: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "block_info" */
  block_info: Array<Block_Info>;
  /** fetch aggregated fields from the table: "block_info" */
  block_info_aggregate: Block_Info_Aggregate;
  /** fetch data from the table: "block_info" using primary key columns */
  block_info_by_pk?: Maybe<Block_Info>;
  /** fetch data from the table: "commit_gas_info" */
  commit_gas_info: Array<Commit_Gas_Info>;
  /** fetch aggregated fields from the table: "commit_gas_info" */
  commit_gas_info_aggregate: Commit_Gas_Info_Aggregate;
  /** fetch data from the table: "commit_gas_info" using primary key columns */
  commit_gas_info_by_pk?: Maybe<Commit_Gas_Info>;
  /** fetch data from the table: "commit_info" */
  commit_info: Array<Commit_Info>;
  /** fetch aggregated fields from the table: "commit_info" */
  commit_info_aggregate: Commit_Info_Aggregate;
  /** fetch data from the table: "commit_info" using primary key columns */
  commit_info_by_pk?: Maybe<Commit_Info>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
};


export type Subscription_RootBlock_InfoArgs = {
  distinct_on?: Maybe<Array<Block_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Info_Order_By>>;
  where?: Maybe<Block_Info_Bool_Exp>;
};


export type Subscription_RootBlock_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Info_Order_By>>;
  where?: Maybe<Block_Info_Bool_Exp>;
};


export type Subscription_RootBlock_Info_By_PkArgs = {
  stacks_block_height: Scalars['Int'];
};


export type Subscription_RootCommit_Gas_InfoArgs = {
  distinct_on?: Maybe<Array<Commit_Gas_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Gas_Info_Order_By>>;
  where?: Maybe<Commit_Gas_Info_Bool_Exp>;
};


export type Subscription_RootCommit_Gas_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Commit_Gas_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Gas_Info_Order_By>>;
  where?: Maybe<Commit_Gas_Info_Bool_Exp>;
};


export type Subscription_RootCommit_Gas_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


export type Subscription_RootCommit_InfoArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};


export type Subscription_RootCommit_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Commit_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commit_Info_Order_By>>;
  where?: Maybe<Commit_Info_Bool_Exp>;
};


export type Subscription_RootCommit_Info_By_PkArgs = {
  commit_btc_tx_id: Scalars['String'];
};


export type Subscription_RootConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


export type Subscription_RootConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


export type Subscription_RootConfig_By_PkArgs = {
  name: Scalars['String'];
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

export type InsertBlockInfosMutationVariables = Exact<{
  rows: Array<Block_Info_Insert_Input> | Block_Info_Insert_Input;
}>;


export type InsertBlockInfosMutation = { __typename?: 'mutation_root', insert_block_info?: { __typename?: 'block_info_mutation_response', affected_rows: number } | null | undefined };

export type QueryBurnchainOpsRowidQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryBurnchainOpsRowidQuery = { __typename?: 'query_root', config: Array<{ __typename?: 'config', value: string }> };

export type QueryLatestBlockHeightQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryLatestBlockHeightQuery = { __typename?: 'query_root', block_info: Array<{ __typename?: 'block_info', stacks_block_height: number, btc_block_height?: number | null | undefined }> };


export const InsertBlockInfosDocument = gql`
    mutation insertBlockInfos($rows: [block_info_insert_input!]!) {
  insert_block_info(objects: $rows) {
    affected_rows
  }
}
    `;
export const QueryBurnchainOpsRowidDocument = gql`
    query queryBurnchainOpsRowid {
  config(where: {name: {_eq: "burnchain_ops_rowid"}}) {
    value
  }
}
    `;
export const QueryLatestBlockHeightDocument = gql`
    query queryLatestBlockHeight {
  block_info(
    limit: 1
    order_by: {btc_block_height: desc, stacks_block_height: desc}
  ) {
    stacks_block_height
    btc_block_height
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertBlockInfos(variables: InsertBlockInfosMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertBlockInfosMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertBlockInfosMutation>(InsertBlockInfosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertBlockInfos');
    },
    queryBurnchainOpsRowid(variables?: QueryBurnchainOpsRowidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryBurnchainOpsRowidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryBurnchainOpsRowidQuery>(QueryBurnchainOpsRowidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'queryBurnchainOpsRowid');
    },
    queryLatestBlockHeight(variables?: QueryLatestBlockHeightQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryLatestBlockHeightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryLatestBlockHeightQuery>(QueryLatestBlockHeightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'queryLatestBlockHeight');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;