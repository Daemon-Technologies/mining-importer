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
  btc_address: Scalars['String'];
  burn_fee: Scalars['Int'];
  id: Scalars['Int'];
  stacks_block_height: Scalars['Int'];
  stx_address: Scalars['String'];
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
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block_info". All fields are combined with a logical 'AND'. */
export type Block_Info_Bool_Exp = {
  _and?: Maybe<Array<Block_Info_Bool_Exp>>;
  _not?: Maybe<Block_Info_Bool_Exp>;
  _or?: Maybe<Array<Block_Info_Bool_Exp>>;
  btc_address?: Maybe<String_Comparison_Exp>;
  burn_fee?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  stx_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "block_info" */
export enum Block_Info_Constraint {
  /** unique or primary key constraint */
  BlockInfoPkey = 'block_info_pkey'
}

/** input type for incrementing numeric columns in table "block_info" */
export type Block_Info_Inc_Input = {
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "block_info" */
export type Block_Info_Insert_Input = {
  btc_address?: Maybe<Scalars['String']>;
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Block_Info_Max_Fields = {
  __typename?: 'block_info_max_fields';
  btc_address?: Maybe<Scalars['String']>;
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Block_Info_Min_Fields = {
  __typename?: 'block_info_min_fields';
  btc_address?: Maybe<Scalars['String']>;
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "block_info" */
export type Block_Info_Mutation_Response = {
  __typename?: 'block_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Block_Info>;
};

/** on conflict condition type for table "block_info" */
export type Block_Info_On_Conflict = {
  constraint: Block_Info_Constraint;
  update_columns?: Array<Block_Info_Update_Column>;
  where?: Maybe<Block_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "block_info". */
export type Block_Info_Order_By = {
  btc_address?: Maybe<Order_By>;
  burn_fee?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
};

/** primary key columns input for table: block_info */
export type Block_Info_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "block_info" */
export enum Block_Info_Select_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BurnFee = 'burn_fee',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** input type for updating data in table "block_info" */
export type Block_Info_Set_Input = {
  btc_address?: Maybe<Scalars['String']>;
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Block_Info_Stddev_Fields = {
  __typename?: 'block_info_stddev_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Info_Stddev_Pop_Fields = {
  __typename?: 'block_info_stddev_pop_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Info_Stddev_Samp_Fields = {
  __typename?: 'block_info_stddev_samp_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Info_Sum_Fields = {
  __typename?: 'block_info_sum_fields';
  burn_fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
};

/** update columns of table "block_info" */
export enum Block_Info_Update_Column {
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BurnFee = 'burn_fee',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address'
}

/** aggregate var_pop on columns */
export type Block_Info_Var_Pop_Fields = {
  __typename?: 'block_info_var_pop_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Info_Var_Samp_Fields = {
  __typename?: 'block_info_var_samp_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Info_Variance_Fields = {
  __typename?: 'block_info_variance_fields';
  burn_fee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "miner_info" */
export type Miner_Info = {
  __typename?: 'miner_info';
  actual_win: Scalars['Int'];
  btc_address: Scalars['String'];
  id: Scalars['Int'];
  stacks_block_height: Scalars['Int'];
  stx_address: Scalars['String'];
  total_burned: Scalars['Int'];
  total_earned: Scalars['Int'];
  total_mined: Scalars['Int'];
  total_win: Scalars['Int'];
};

/** aggregated selection of "miner_info" */
export type Miner_Info_Aggregate = {
  __typename?: 'miner_info_aggregate';
  aggregate?: Maybe<Miner_Info_Aggregate_Fields>;
  nodes: Array<Miner_Info>;
};

/** aggregate fields of "miner_info" */
export type Miner_Info_Aggregate_Fields = {
  __typename?: 'miner_info_aggregate_fields';
  avg?: Maybe<Miner_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Miner_Info_Max_Fields>;
  min?: Maybe<Miner_Info_Min_Fields>;
  stddev?: Maybe<Miner_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Miner_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Miner_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Miner_Info_Sum_Fields>;
  var_pop?: Maybe<Miner_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Miner_Info_Var_Samp_Fields>;
  variance?: Maybe<Miner_Info_Variance_Fields>;
};


/** aggregate fields of "miner_info" */
export type Miner_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Miner_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Miner_Info_Avg_Fields = {
  __typename?: 'miner_info_avg_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "miner_info". All fields are combined with a logical 'AND'. */
export type Miner_Info_Bool_Exp = {
  _and?: Maybe<Array<Miner_Info_Bool_Exp>>;
  _not?: Maybe<Miner_Info_Bool_Exp>;
  _or?: Maybe<Array<Miner_Info_Bool_Exp>>;
  actual_win?: Maybe<Int_Comparison_Exp>;
  btc_address?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  stx_address?: Maybe<String_Comparison_Exp>;
  total_burned?: Maybe<Int_Comparison_Exp>;
  total_earned?: Maybe<Int_Comparison_Exp>;
  total_mined?: Maybe<Int_Comparison_Exp>;
  total_win?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "miner_info" */
export enum Miner_Info_Constraint {
  /** unique or primary key constraint */
  MinerInfoPkey = 'miner_info_pkey'
}

/** input type for incrementing numeric columns in table "miner_info" */
export type Miner_Info_Inc_Input = {
  actual_win?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "miner_info" */
export type Miner_Info_Insert_Input = {
  actual_win?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Miner_Info_Max_Fields = {
  __typename?: 'miner_info_max_fields';
  actual_win?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Miner_Info_Min_Fields = {
  __typename?: 'miner_info_min_fields';
  actual_win?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "miner_info" */
export type Miner_Info_Mutation_Response = {
  __typename?: 'miner_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Miner_Info>;
};

/** on conflict condition type for table "miner_info" */
export type Miner_Info_On_Conflict = {
  constraint: Miner_Info_Constraint;
  update_columns?: Array<Miner_Info_Update_Column>;
  where?: Maybe<Miner_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "miner_info". */
export type Miner_Info_Order_By = {
  actual_win?: Maybe<Order_By>;
  btc_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
  total_burned?: Maybe<Order_By>;
  total_earned?: Maybe<Order_By>;
  total_mined?: Maybe<Order_By>;
  total_win?: Maybe<Order_By>;
};

/** primary key columns input for table: miner_info */
export type Miner_Info_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "miner_info" */
export enum Miner_Info_Select_Column {
  /** column name */
  ActualWin = 'actual_win',
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address',
  /** column name */
  TotalBurned = 'total_burned',
  /** column name */
  TotalEarned = 'total_earned',
  /** column name */
  TotalMined = 'total_mined',
  /** column name */
  TotalWin = 'total_win'
}

/** input type for updating data in table "miner_info" */
export type Miner_Info_Set_Input = {
  actual_win?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Miner_Info_Stddev_Fields = {
  __typename?: 'miner_info_stddev_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Miner_Info_Stddev_Pop_Fields = {
  __typename?: 'miner_info_stddev_pop_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Miner_Info_Stddev_Samp_Fields = {
  __typename?: 'miner_info_stddev_samp_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Miner_Info_Sum_Fields = {
  __typename?: 'miner_info_sum_fields';
  actual_win?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  total_burned?: Maybe<Scalars['Int']>;
  total_earned?: Maybe<Scalars['Int']>;
  total_mined?: Maybe<Scalars['Int']>;
  total_win?: Maybe<Scalars['Int']>;
};

/** update columns of table "miner_info" */
export enum Miner_Info_Update_Column {
  /** column name */
  ActualWin = 'actual_win',
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address',
  /** column name */
  TotalBurned = 'total_burned',
  /** column name */
  TotalEarned = 'total_earned',
  /** column name */
  TotalMined = 'total_mined',
  /** column name */
  TotalWin = 'total_win'
}

/** aggregate var_pop on columns */
export type Miner_Info_Var_Pop_Fields = {
  __typename?: 'miner_info_var_pop_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Miner_Info_Var_Samp_Fields = {
  __typename?: 'miner_info_var_samp_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Miner_Info_Variance_Fields = {
  __typename?: 'miner_info_variance_fields';
  actual_win?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  total_burned?: Maybe<Scalars['Float']>;
  total_earned?: Maybe<Scalars['Float']>;
  total_mined?: Maybe<Scalars['Float']>;
  total_win?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mining_info" */
export type Mining_Info = {
  __typename?: 'mining_info';
  block_reward: Scalars['Int'];
  btc_address: Scalars['String'];
  burn_chain_height: Scalars['Int'];
  burn_header_hash: Scalars['String'];
  burn_header_timestamp: Scalars['Int'];
  id: Scalars['Int'];
  stacks_block_height: Scalars['Int'];
  stx_address: Scalars['String'];
  tx_reward: Scalars['Int'];
  winning_block_txid: Scalars['String'];
};

/** aggregated selection of "mining_info" */
export type Mining_Info_Aggregate = {
  __typename?: 'mining_info_aggregate';
  aggregate?: Maybe<Mining_Info_Aggregate_Fields>;
  nodes: Array<Mining_Info>;
};

/** aggregate fields of "mining_info" */
export type Mining_Info_Aggregate_Fields = {
  __typename?: 'mining_info_aggregate_fields';
  avg?: Maybe<Mining_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mining_Info_Max_Fields>;
  min?: Maybe<Mining_Info_Min_Fields>;
  stddev?: Maybe<Mining_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Mining_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mining_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Mining_Info_Sum_Fields>;
  var_pop?: Maybe<Mining_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Mining_Info_Var_Samp_Fields>;
  variance?: Maybe<Mining_Info_Variance_Fields>;
};


/** aggregate fields of "mining_info" */
export type Mining_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mining_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Mining_Info_Avg_Fields = {
  __typename?: 'mining_info_avg_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mining_info". All fields are combined with a logical 'AND'. */
export type Mining_Info_Bool_Exp = {
  _and?: Maybe<Array<Mining_Info_Bool_Exp>>;
  _not?: Maybe<Mining_Info_Bool_Exp>;
  _or?: Maybe<Array<Mining_Info_Bool_Exp>>;
  block_reward?: Maybe<Int_Comparison_Exp>;
  btc_address?: Maybe<String_Comparison_Exp>;
  burn_chain_height?: Maybe<Int_Comparison_Exp>;
  burn_header_hash?: Maybe<String_Comparison_Exp>;
  burn_header_timestamp?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  stacks_block_height?: Maybe<Int_Comparison_Exp>;
  stx_address?: Maybe<String_Comparison_Exp>;
  tx_reward?: Maybe<Int_Comparison_Exp>;
  winning_block_txid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "mining_info" */
export enum Mining_Info_Constraint {
  /** unique or primary key constraint */
  MiningInfoPkey = 'mining_info_pkey'
}

/** input type for incrementing numeric columns in table "mining_info" */
export type Mining_Info_Inc_Input = {
  block_reward?: Maybe<Scalars['Int']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  tx_reward?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "mining_info" */
export type Mining_Info_Insert_Input = {
  block_reward?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_hash?: Maybe<Scalars['String']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  tx_reward?: Maybe<Scalars['Int']>;
  winning_block_txid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Mining_Info_Max_Fields = {
  __typename?: 'mining_info_max_fields';
  block_reward?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_hash?: Maybe<Scalars['String']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  tx_reward?: Maybe<Scalars['Int']>;
  winning_block_txid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Mining_Info_Min_Fields = {
  __typename?: 'mining_info_min_fields';
  block_reward?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_hash?: Maybe<Scalars['String']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  tx_reward?: Maybe<Scalars['Int']>;
  winning_block_txid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "mining_info" */
export type Mining_Info_Mutation_Response = {
  __typename?: 'mining_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mining_Info>;
};

/** on conflict condition type for table "mining_info" */
export type Mining_Info_On_Conflict = {
  constraint: Mining_Info_Constraint;
  update_columns?: Array<Mining_Info_Update_Column>;
  where?: Maybe<Mining_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "mining_info". */
export type Mining_Info_Order_By = {
  block_reward?: Maybe<Order_By>;
  btc_address?: Maybe<Order_By>;
  burn_chain_height?: Maybe<Order_By>;
  burn_header_hash?: Maybe<Order_By>;
  burn_header_timestamp?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stacks_block_height?: Maybe<Order_By>;
  stx_address?: Maybe<Order_By>;
  tx_reward?: Maybe<Order_By>;
  winning_block_txid?: Maybe<Order_By>;
};

/** primary key columns input for table: mining_info */
export type Mining_Info_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "mining_info" */
export enum Mining_Info_Select_Column {
  /** column name */
  BlockReward = 'block_reward',
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BurnChainHeight = 'burn_chain_height',
  /** column name */
  BurnHeaderHash = 'burn_header_hash',
  /** column name */
  BurnHeaderTimestamp = 'burn_header_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address',
  /** column name */
  TxReward = 'tx_reward',
  /** column name */
  WinningBlockTxid = 'winning_block_txid'
}

/** input type for updating data in table "mining_info" */
export type Mining_Info_Set_Input = {
  block_reward?: Maybe<Scalars['Int']>;
  btc_address?: Maybe<Scalars['String']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_hash?: Maybe<Scalars['String']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  stx_address?: Maybe<Scalars['String']>;
  tx_reward?: Maybe<Scalars['Int']>;
  winning_block_txid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Mining_Info_Stddev_Fields = {
  __typename?: 'mining_info_stddev_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Mining_Info_Stddev_Pop_Fields = {
  __typename?: 'mining_info_stddev_pop_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Mining_Info_Stddev_Samp_Fields = {
  __typename?: 'mining_info_stddev_samp_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Mining_Info_Sum_Fields = {
  __typename?: 'mining_info_sum_fields';
  block_reward?: Maybe<Scalars['Int']>;
  burn_chain_height?: Maybe<Scalars['Int']>;
  burn_header_timestamp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stacks_block_height?: Maybe<Scalars['Int']>;
  tx_reward?: Maybe<Scalars['Int']>;
};

/** update columns of table "mining_info" */
export enum Mining_Info_Update_Column {
  /** column name */
  BlockReward = 'block_reward',
  /** column name */
  BtcAddress = 'btc_address',
  /** column name */
  BurnChainHeight = 'burn_chain_height',
  /** column name */
  BurnHeaderHash = 'burn_header_hash',
  /** column name */
  BurnHeaderTimestamp = 'burn_header_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  StacksBlockHeight = 'stacks_block_height',
  /** column name */
  StxAddress = 'stx_address',
  /** column name */
  TxReward = 'tx_reward',
  /** column name */
  WinningBlockTxid = 'winning_block_txid'
}

/** aggregate var_pop on columns */
export type Mining_Info_Var_Pop_Fields = {
  __typename?: 'mining_info_var_pop_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Mining_Info_Var_Samp_Fields = {
  __typename?: 'mining_info_var_samp_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Mining_Info_Variance_Fields = {
  __typename?: 'mining_info_variance_fields';
  block_reward?: Maybe<Scalars['Float']>;
  burn_chain_height?: Maybe<Scalars['Float']>;
  burn_header_timestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stacks_block_height?: Maybe<Scalars['Float']>;
  tx_reward?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "block_info" */
  delete_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** delete single row from the table: "block_info" */
  delete_block_info_by_pk?: Maybe<Block_Info>;
  /** delete data from the table: "miner_info" */
  delete_miner_info?: Maybe<Miner_Info_Mutation_Response>;
  /** delete single row from the table: "miner_info" */
  delete_miner_info_by_pk?: Maybe<Miner_Info>;
  /** delete data from the table: "mining_info" */
  delete_mining_info?: Maybe<Mining_Info_Mutation_Response>;
  /** delete single row from the table: "mining_info" */
  delete_mining_info_by_pk?: Maybe<Mining_Info>;
  /** insert data into the table: "block_info" */
  insert_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** insert a single row into the table: "block_info" */
  insert_block_info_one?: Maybe<Block_Info>;
  /** insert data into the table: "miner_info" */
  insert_miner_info?: Maybe<Miner_Info_Mutation_Response>;
  /** insert a single row into the table: "miner_info" */
  insert_miner_info_one?: Maybe<Miner_Info>;
  /** insert data into the table: "mining_info" */
  insert_mining_info?: Maybe<Mining_Info_Mutation_Response>;
  /** insert a single row into the table: "mining_info" */
  insert_mining_info_one?: Maybe<Mining_Info>;
  /** update data of the table: "block_info" */
  update_block_info?: Maybe<Block_Info_Mutation_Response>;
  /** update single row of the table: "block_info" */
  update_block_info_by_pk?: Maybe<Block_Info>;
  /** update data of the table: "miner_info" */
  update_miner_info?: Maybe<Miner_Info_Mutation_Response>;
  /** update single row of the table: "miner_info" */
  update_miner_info_by_pk?: Maybe<Miner_Info>;
  /** update data of the table: "mining_info" */
  update_mining_info?: Maybe<Mining_Info_Mutation_Response>;
  /** update single row of the table: "mining_info" */
  update_mining_info_by_pk?: Maybe<Mining_Info>;
};


/** mutation root */
export type Mutation_RootDelete_Block_InfoArgs = {
  where: Block_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_Info_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Miner_InfoArgs = {
  where: Miner_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Miner_Info_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Mining_InfoArgs = {
  where: Mining_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mining_Info_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_Miner_InfoArgs = {
  objects: Array<Miner_Info_Insert_Input>;
  on_conflict?: Maybe<Miner_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Miner_Info_OneArgs = {
  object: Miner_Info_Insert_Input;
  on_conflict?: Maybe<Miner_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mining_InfoArgs = {
  objects: Array<Mining_Info_Insert_Input>;
  on_conflict?: Maybe<Mining_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mining_Info_OneArgs = {
  object: Mining_Info_Insert_Input;
  on_conflict?: Maybe<Mining_Info_On_Conflict>;
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
export type Mutation_RootUpdate_Miner_InfoArgs = {
  _inc?: Maybe<Miner_Info_Inc_Input>;
  _set?: Maybe<Miner_Info_Set_Input>;
  where: Miner_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Miner_Info_By_PkArgs = {
  _inc?: Maybe<Miner_Info_Inc_Input>;
  _set?: Maybe<Miner_Info_Set_Input>;
  pk_columns: Miner_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mining_InfoArgs = {
  _inc?: Maybe<Mining_Info_Inc_Input>;
  _set?: Maybe<Mining_Info_Set_Input>;
  where: Mining_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mining_Info_By_PkArgs = {
  _inc?: Maybe<Mining_Info_Inc_Input>;
  _set?: Maybe<Mining_Info_Set_Input>;
  pk_columns: Mining_Info_Pk_Columns_Input;
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
  /** fetch data from the table: "miner_info" */
  miner_info: Array<Miner_Info>;
  /** fetch aggregated fields from the table: "miner_info" */
  miner_info_aggregate: Miner_Info_Aggregate;
  /** fetch data from the table: "miner_info" using primary key columns */
  miner_info_by_pk?: Maybe<Miner_Info>;
  /** fetch data from the table: "mining_info" */
  mining_info: Array<Mining_Info>;
  /** fetch aggregated fields from the table: "mining_info" */
  mining_info_aggregate: Mining_Info_Aggregate;
  /** fetch data from the table: "mining_info" using primary key columns */
  mining_info_by_pk?: Maybe<Mining_Info>;
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
  id: Scalars['Int'];
};


export type Query_RootMiner_InfoArgs = {
  distinct_on?: Maybe<Array<Miner_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Miner_Info_Order_By>>;
  where?: Maybe<Miner_Info_Bool_Exp>;
};


export type Query_RootMiner_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Miner_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Miner_Info_Order_By>>;
  where?: Maybe<Miner_Info_Bool_Exp>;
};


export type Query_RootMiner_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMining_InfoArgs = {
  distinct_on?: Maybe<Array<Mining_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mining_Info_Order_By>>;
  where?: Maybe<Mining_Info_Bool_Exp>;
};


export type Query_RootMining_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Mining_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mining_Info_Order_By>>;
  where?: Maybe<Mining_Info_Bool_Exp>;
};


export type Query_RootMining_Info_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "block_info" */
  block_info: Array<Block_Info>;
  /** fetch aggregated fields from the table: "block_info" */
  block_info_aggregate: Block_Info_Aggregate;
  /** fetch data from the table: "block_info" using primary key columns */
  block_info_by_pk?: Maybe<Block_Info>;
  /** fetch data from the table: "miner_info" */
  miner_info: Array<Miner_Info>;
  /** fetch aggregated fields from the table: "miner_info" */
  miner_info_aggregate: Miner_Info_Aggregate;
  /** fetch data from the table: "miner_info" using primary key columns */
  miner_info_by_pk?: Maybe<Miner_Info>;
  /** fetch data from the table: "mining_info" */
  mining_info: Array<Mining_Info>;
  /** fetch aggregated fields from the table: "mining_info" */
  mining_info_aggregate: Mining_Info_Aggregate;
  /** fetch data from the table: "mining_info" using primary key columns */
  mining_info_by_pk?: Maybe<Mining_Info>;
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
  id: Scalars['Int'];
};


export type Subscription_RootMiner_InfoArgs = {
  distinct_on?: Maybe<Array<Miner_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Miner_Info_Order_By>>;
  where?: Maybe<Miner_Info_Bool_Exp>;
};


export type Subscription_RootMiner_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Miner_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Miner_Info_Order_By>>;
  where?: Maybe<Miner_Info_Bool_Exp>;
};


export type Subscription_RootMiner_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMining_InfoArgs = {
  distinct_on?: Maybe<Array<Mining_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mining_Info_Order_By>>;
  where?: Maybe<Mining_Info_Bool_Exp>;
};


export type Subscription_RootMining_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Mining_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mining_Info_Order_By>>;
  where?: Maybe<Mining_Info_Bool_Exp>;
};


export type Subscription_RootMining_Info_By_PkArgs = {
  id: Scalars['Int'];
};

export type DeleteMinerInfoMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteMinerInfoMutation = { __typename?: 'mutation_root', delete_miner_info?: { __typename?: 'miner_info_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'miner_info', id: number }> } | null | undefined };


export const DeleteMinerInfoDocument = gql`
    mutation DeleteMinerInfo {
  delete_miner_info(where: {stx_address: {_eq: "123"}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteMinerInfo(variables?: DeleteMinerInfoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteMinerInfoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteMinerInfoMutation>(DeleteMinerInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteMinerInfo');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;