import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  login: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  removeNode: Node;
  removeUser: User;
};


export type MutationCreateNetworkCommandArgs = {
  createNetworkCommandInput: CreateNetworkCommandInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveNodeArgs = {
  id: Scalars['Int'];
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

export type Node = {
  __typename?: 'Node';
  battery_level: Scalars['Int'];
  id: Scalars['Int'];
  last_contact: Scalars['DateTime'];
  neighbours: Scalars['String'];
  node_id: Scalars['String'];
  node_type: Scalars['Int'];
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
  checkLogin: Scalars['Boolean'];
  networkCommands: Array<NetworkCommand>;
  nodes: Array<Node>;
  punches: Array<Punch>;
  userById: User;
  userByUsername: User;
  users: Array<User>;
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

export type CheckLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQuery = { __typename?: 'Query', checkLogin: boolean };

export type GetDashboardOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardOverviewQuery = { __typename?: 'Query', nodes: Array<{ __typename?: 'Node', node_type: number, last_contact: any }>, networkCommands: Array<{ __typename?: 'NetworkCommand', id: number }>, punches: Array<{ __typename?: 'Punch', receive_time: any }> };

export type GetNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNodesQuery = { __typename?: 'Query', nodes: Array<{ __typename?: 'Node', node_id: string, node_type: number, battery_level: number, last_contact: any, neighbours: string }> };

export type LoginMutationMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: boolean };

export type LogutMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type LogutMutationMutation = { __typename?: 'Mutation', logout: boolean };


export const CheckLoginDocument = gql`
    query CheckLogin {
  checkLogin
}
    `;

/**
 * __useCheckLoginQuery__
 *
 * To run a query within a React component, call `useCheckLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckLoginQuery(baseOptions?: Apollo.QueryHookOptions<CheckLoginQuery, CheckLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckLoginQuery, CheckLoginQueryVariables>(CheckLoginDocument, options);
      }
export function useCheckLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckLoginQuery, CheckLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckLoginQuery, CheckLoginQueryVariables>(CheckLoginDocument, options);
        }
export type CheckLoginQueryHookResult = ReturnType<typeof useCheckLoginQuery>;
export type CheckLoginLazyQueryHookResult = ReturnType<typeof useCheckLoginLazyQuery>;
export type CheckLoginQueryResult = Apollo.QueryResult<CheckLoginQuery, CheckLoginQueryVariables>;
export const GetDashboardOverviewDocument = gql`
    query GetDashboardOverview {
  nodes {
    node_type
    last_contact
  }
  networkCommands {
    id
  }
  punches {
    receive_time
  }
}
    `;

/**
 * __useGetDashboardOverviewQuery__
 *
 * To run a query within a React component, call `useGetDashboardOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardOverviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardOverviewQuery(baseOptions?: Apollo.QueryHookOptions<GetDashboardOverviewQuery, GetDashboardOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardOverviewQuery, GetDashboardOverviewQueryVariables>(GetDashboardOverviewDocument, options);
      }
export function useGetDashboardOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardOverviewQuery, GetDashboardOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardOverviewQuery, GetDashboardOverviewQueryVariables>(GetDashboardOverviewDocument, options);
        }
export type GetDashboardOverviewQueryHookResult = ReturnType<typeof useGetDashboardOverviewQuery>;
export type GetDashboardOverviewLazyQueryHookResult = ReturnType<typeof useGetDashboardOverviewLazyQuery>;
export type GetDashboardOverviewQueryResult = Apollo.QueryResult<GetDashboardOverviewQuery, GetDashboardOverviewQueryVariables>;
export const GetNodesDocument = gql`
    query GetNodes {
  nodes {
    node_id
    node_type
    battery_level
    last_contact
    neighbours
  }
}
    `;

/**
 * __useGetNodesQuery__
 *
 * To run a query within a React component, call `useGetNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNodesQuery(baseOptions?: Apollo.QueryHookOptions<GetNodesQuery, GetNodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNodesQuery, GetNodesQueryVariables>(GetNodesDocument, options);
      }
export function useGetNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNodesQuery, GetNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNodesQuery, GetNodesQueryVariables>(GetNodesDocument, options);
        }
export type GetNodesQueryHookResult = ReturnType<typeof useGetNodesQuery>;
export type GetNodesLazyQueryHookResult = ReturnType<typeof useGetNodesLazyQuery>;
export type GetNodesQueryResult = Apollo.QueryResult<GetNodesQuery, GetNodesQueryVariables>;
export const LoginMutationDocument = gql`
    mutation LoginMutation($username: String!, $password: String!) {
  login(username: $username, password: $password)
}
    `;
export type LoginMutationMutationFn = Apollo.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
      }
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>;
export const LogutMutationDocument = gql`
    mutation LogutMutation {
  logout
}
    `;
export type LogutMutationMutationFn = Apollo.MutationFunction<LogutMutationMutation, LogutMutationMutationVariables>;

/**
 * __useLogutMutationMutation__
 *
 * To run a mutation, you first call `useLogutMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogutMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logutMutationMutation, { data, loading, error }] = useLogutMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogutMutationMutation(baseOptions?: Apollo.MutationHookOptions<LogutMutationMutation, LogutMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogutMutationMutation, LogutMutationMutationVariables>(LogutMutationDocument, options);
      }
export type LogutMutationMutationHookResult = ReturnType<typeof useLogutMutationMutation>;
export type LogutMutationMutationResult = Apollo.MutationResult<LogutMutationMutation>;
export type LogutMutationMutationOptions = Apollo.BaseMutationOptions<LogutMutationMutation, LogutMutationMutationVariables>;