export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
};

export type CreateNetworkCommandInput = {
  /** Id of the competition the command is for. */
  competition_id: Scalars['String'];
  /** Command data (currently also Int) */
  data: Scalars['Int'];
  /** Command type (Int) */
  type: Scalars['Int'];
};

export type CreateUserInput = {
  password: Scalars['String'];
  /** User type (0 = user, 1 = administrator) */
  user_type: Scalars['Int'];
  /** Unique username */
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNetworkCommand: NetworkCommand;
  createUser: User;
  removeUser: User;
};


export type MutationCreateNetworkCommandArgs = {
  createNetworkCommandInput: CreateNetworkCommandInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type NetworkCommand = {
  __typename?: 'NetworkCommand';
  competition_id: Scalars['String'];
  creation_time: Scalars['DateTime'];
  data: Scalars['Int'];
  /** NetworkCommand ID */
  id: Scalars['Int'];
  type: Scalars['String'];
};

export type Punch = {
  __typename?: 'Punch';
  competition_id: Scalars['String'];
  /** Punch ID */
  id: Scalars['Int'];
  receive_time: Scalars['DateTime'];
  seconds: Scalars['Int'];
  si_number: Scalars['String'];
  station_number: Scalars['String'];
  time: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  login: Array<User>;
  networkCommands: Array<NetworkCommand>;
  punches: Array<Punch>;
  userById: User;
  userByUsername: User;
  users: Array<User>;
};


export type QueryLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** User ID */
  id: Scalars['Int'];
  password: Scalars['String'];
  user_type: Scalars['Int'];
  username: Scalars['String'];
};
