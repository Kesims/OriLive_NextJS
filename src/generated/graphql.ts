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
  /** Command type (String) */
  type: Scalars['String'];
};

export type CreateOresultsMappingInput = {
  /** Local node ID */
  local_id: Scalars['Int'];
  /** OResults api key for the device */
  oresults_key: Scalars['String'];
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
  createNetworkCommand: Scalars['Boolean'];
  createOresultsMapping: Scalars['Boolean'];
  createUser: User;
  login: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  removeNetworkCommand: Scalars['Boolean'];
  removeNode: Scalars['Boolean'];
  removeOresultsMapping: Scalars['Boolean'];
  removeUser: User;
};


export type MutationCreateNetworkCommandArgs = {
  createNetworkCommandInput: CreateNetworkCommandInput;
};


export type MutationCreateOresultsMappingArgs = {
  createOresultsMappingInput: CreateOresultsMappingInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveNetworkCommandArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveNodeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveOresultsMappingArgs = {
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

export type OResultsMapping = {
  __typename?: 'OResultsMapping';
  /** OResults API key */
  api_key: Scalars['String'];
  /** Mapping ID */
  id: Scalars['Int'];
  /** Local node ID */
  node_id: Scalars['Int'];
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
  oresultsMappings: Array<OResultsMapping>;
  punches: Array<Punch>;
  userById: User;
  userByUsername: User;
  users: Array<User>;
};


export type QueryPunchesArgs = {
  after?: InputMaybe<Scalars['DateTime']>;
};


export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  networkCommandAdded: NetworkCommand;
  networkCommandRemoved: NetworkCommand;
  nodeAdded?: Maybe<Node>;
  nodeRemoved: Node;
  oresultsMappingAdded: OResultsMapping;
  oresultsMappingRemoved: OResultsMapping;
  punchAdded: Punch;
};

export type User = {
  __typename?: 'User';
  /** User ID */
  id: Scalars['Int'];
  password: Scalars['String'];
  user_type: Scalars['Int'];
  username: Scalars['String'];
};

export type GetDashboardOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardOverviewQuery = { __typename?: 'Query', nodes: Array<{ __typename?: 'Node', node_type: number, last_contact: any }>, networkCommands: Array<{ __typename?: 'NetworkCommand', id: number }>, punches: Array<{ __typename?: 'Punch', receive_time: any }> };

export type LoginMutationMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: boolean };

export type LogutMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type LogutMutationMutation = { __typename?: 'Mutation', logout: boolean };

export type CheckLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQuery = { __typename?: 'Query', checkLogin: boolean };

export type GetNetworkCommandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNetworkCommandsQuery = { __typename?: 'Query', networkCommands: Array<{ __typename?: 'NetworkCommand', id: number, competition_id: string, creation_time: any, type: string, data: number }> };

export type NetworkCommandAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NetworkCommandAddedSubscription = { __typename?: 'Subscription', networkCommandAdded: { __typename?: 'NetworkCommand', id: number, competition_id: string, creation_time: any, type: string, data: number } };

export type CreateNetworkCommandMutationVariables = Exact<{
  createNetworkCommandInput: CreateNetworkCommandInput;
}>;


export type CreateNetworkCommandMutation = { __typename?: 'Mutation', createNetworkCommand: boolean };

export type DeleteNetworkCommandMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNetworkCommandMutation = { __typename?: 'Mutation', removeNetworkCommand: boolean };

export type NetworkCommandRemovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NetworkCommandRemovedSubscription = { __typename?: 'Subscription', networkCommandRemoved: { __typename?: 'NetworkCommand', id: number, competition_id: string, creation_time: any, type: string, data: number } };

export type GetNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNodesQuery = { __typename?: 'Query', nodes: Array<{ __typename?: 'Node', id: number, node_id: string, node_type: number, battery_level: number, last_contact: any, neighbours: string }> };

export type NodeAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NodeAddedSubscription = { __typename?: 'Subscription', nodeAdded?: { __typename?: 'Node', id: number, node_id: string, node_type: number, battery_level: number, last_contact: any, neighbours: string } | null };

export type NodeRemovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NodeRemovedSubscription = { __typename?: 'Subscription', nodeRemoved: { __typename?: 'Node', id: number, node_id: string, node_type: number, battery_level: number, last_contact: any, neighbours: string } };

export type RemoveNodeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveNodeMutation = { __typename?: 'Mutation', removeNode: boolean };

export type GetOResultsMappingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOResultsMappingsQuery = { __typename?: 'Query', oresultsMappings: Array<{ __typename?: 'OResultsMapping', id: number, node_id: number, api_key: string }> };

export type OresultsMappingAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OresultsMappingAddedSubscription = { __typename?: 'Subscription', oresultsMappingAdded: { __typename?: 'OResultsMapping', id: number, node_id: number, api_key: string } };

export type OresultsMappingRemovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OresultsMappingRemovedSubscription = { __typename?: 'Subscription', oresultsMappingRemoved: { __typename?: 'OResultsMapping', id: number, node_id: number, api_key: string } };

export type CreateOresultsMappingMutationVariables = Exact<{
  input: CreateOresultsMappingInput;
}>;


export type CreateOresultsMappingMutation = { __typename?: 'Mutation', createOresultsMapping: boolean };

export type RemoveOresultsMappingMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveOresultsMappingMutation = { __typename?: 'Mutation', removeOresultsMapping: boolean };

export type PunchSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PunchSubscriptionSubscription = { __typename?: 'Subscription', punchAdded: { __typename?: 'Punch', id: number, competition_id: string, time: any, receive_time: any, si_number: string, station_number: string, seconds: number } };

export type GetPunchesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['DateTime']>;
}>;


export type GetPunchesQuery = { __typename?: 'Query', punches: Array<{ __typename?: 'Punch', id: number, competition_id: string, time: any, receive_time: any, si_number: string, station_number: string, seconds: number }> };


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
export const GetNetworkCommandsDocument = gql`
    query getNetworkCommands {
  networkCommands {
    id
    competition_id
    creation_time
    type
    data
  }
}
    `;

/**
 * __useGetNetworkCommandsQuery__
 *
 * To run a query within a React component, call `useGetNetworkCommandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNetworkCommandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNetworkCommandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNetworkCommandsQuery(baseOptions?: Apollo.QueryHookOptions<GetNetworkCommandsQuery, GetNetworkCommandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNetworkCommandsQuery, GetNetworkCommandsQueryVariables>(GetNetworkCommandsDocument, options);
      }
export function useGetNetworkCommandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNetworkCommandsQuery, GetNetworkCommandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNetworkCommandsQuery, GetNetworkCommandsQueryVariables>(GetNetworkCommandsDocument, options);
        }
export type GetNetworkCommandsQueryHookResult = ReturnType<typeof useGetNetworkCommandsQuery>;
export type GetNetworkCommandsLazyQueryHookResult = ReturnType<typeof useGetNetworkCommandsLazyQuery>;
export type GetNetworkCommandsQueryResult = Apollo.QueryResult<GetNetworkCommandsQuery, GetNetworkCommandsQueryVariables>;
export const NetworkCommandAddedDocument = gql`
    subscription networkCommandAdded {
  networkCommandAdded {
    id
    competition_id
    creation_time
    type
    data
  }
}
    `;

/**
 * __useNetworkCommandAddedSubscription__
 *
 * To run a query within a React component, call `useNetworkCommandAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNetworkCommandAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNetworkCommandAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNetworkCommandAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NetworkCommandAddedSubscription, NetworkCommandAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NetworkCommandAddedSubscription, NetworkCommandAddedSubscriptionVariables>(NetworkCommandAddedDocument, options);
      }
export type NetworkCommandAddedSubscriptionHookResult = ReturnType<typeof useNetworkCommandAddedSubscription>;
export type NetworkCommandAddedSubscriptionResult = Apollo.SubscriptionResult<NetworkCommandAddedSubscription>;
export const CreateNetworkCommandDocument = gql`
    mutation createNetworkCommand($createNetworkCommandInput: CreateNetworkCommandInput!) {
  createNetworkCommand(createNetworkCommandInput: $createNetworkCommandInput)
}
    `;
export type CreateNetworkCommandMutationFn = Apollo.MutationFunction<CreateNetworkCommandMutation, CreateNetworkCommandMutationVariables>;

/**
 * __useCreateNetworkCommandMutation__
 *
 * To run a mutation, you first call `useCreateNetworkCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNetworkCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNetworkCommandMutation, { data, loading, error }] = useCreateNetworkCommandMutation({
 *   variables: {
 *      createNetworkCommandInput: // value for 'createNetworkCommandInput'
 *   },
 * });
 */
export function useCreateNetworkCommandMutation(baseOptions?: Apollo.MutationHookOptions<CreateNetworkCommandMutation, CreateNetworkCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNetworkCommandMutation, CreateNetworkCommandMutationVariables>(CreateNetworkCommandDocument, options);
      }
export type CreateNetworkCommandMutationHookResult = ReturnType<typeof useCreateNetworkCommandMutation>;
export type CreateNetworkCommandMutationResult = Apollo.MutationResult<CreateNetworkCommandMutation>;
export type CreateNetworkCommandMutationOptions = Apollo.BaseMutationOptions<CreateNetworkCommandMutation, CreateNetworkCommandMutationVariables>;
export const DeleteNetworkCommandDocument = gql`
    mutation deleteNetworkCommand($id: Int!) {
  removeNetworkCommand(id: $id)
}
    `;
export type DeleteNetworkCommandMutationFn = Apollo.MutationFunction<DeleteNetworkCommandMutation, DeleteNetworkCommandMutationVariables>;

/**
 * __useDeleteNetworkCommandMutation__
 *
 * To run a mutation, you first call `useDeleteNetworkCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNetworkCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNetworkCommandMutation, { data, loading, error }] = useDeleteNetworkCommandMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNetworkCommandMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNetworkCommandMutation, DeleteNetworkCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNetworkCommandMutation, DeleteNetworkCommandMutationVariables>(DeleteNetworkCommandDocument, options);
      }
export type DeleteNetworkCommandMutationHookResult = ReturnType<typeof useDeleteNetworkCommandMutation>;
export type DeleteNetworkCommandMutationResult = Apollo.MutationResult<DeleteNetworkCommandMutation>;
export type DeleteNetworkCommandMutationOptions = Apollo.BaseMutationOptions<DeleteNetworkCommandMutation, DeleteNetworkCommandMutationVariables>;
export const NetworkCommandRemovedDocument = gql`
    subscription networkCommandRemoved {
  networkCommandRemoved {
    id
    competition_id
    creation_time
    type
    data
  }
}
    `;

/**
 * __useNetworkCommandRemovedSubscription__
 *
 * To run a query within a React component, call `useNetworkCommandRemovedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNetworkCommandRemovedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNetworkCommandRemovedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNetworkCommandRemovedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NetworkCommandRemovedSubscription, NetworkCommandRemovedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NetworkCommandRemovedSubscription, NetworkCommandRemovedSubscriptionVariables>(NetworkCommandRemovedDocument, options);
      }
export type NetworkCommandRemovedSubscriptionHookResult = ReturnType<typeof useNetworkCommandRemovedSubscription>;
export type NetworkCommandRemovedSubscriptionResult = Apollo.SubscriptionResult<NetworkCommandRemovedSubscription>;
export const GetNodesDocument = gql`
    query GetNodes {
  nodes {
    id
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
export const NodeAddedDocument = gql`
    subscription nodeAdded {
  nodeAdded {
    id
    node_id
    node_type
    battery_level
    last_contact
    neighbours
  }
}
    `;

/**
 * __useNodeAddedSubscription__
 *
 * To run a query within a React component, call `useNodeAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNodeAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNodeAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NodeAddedSubscription, NodeAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NodeAddedSubscription, NodeAddedSubscriptionVariables>(NodeAddedDocument, options);
      }
export type NodeAddedSubscriptionHookResult = ReturnType<typeof useNodeAddedSubscription>;
export type NodeAddedSubscriptionResult = Apollo.SubscriptionResult<NodeAddedSubscription>;
export const NodeRemovedDocument = gql`
    subscription nodeRemoved {
  nodeRemoved {
    id
    node_id
    node_type
    battery_level
    last_contact
    neighbours
  }
}
    `;

/**
 * __useNodeRemovedSubscription__
 *
 * To run a query within a React component, call `useNodeRemovedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNodeRemovedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeRemovedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNodeRemovedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NodeRemovedSubscription, NodeRemovedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NodeRemovedSubscription, NodeRemovedSubscriptionVariables>(NodeRemovedDocument, options);
      }
export type NodeRemovedSubscriptionHookResult = ReturnType<typeof useNodeRemovedSubscription>;
export type NodeRemovedSubscriptionResult = Apollo.SubscriptionResult<NodeRemovedSubscription>;
export const RemoveNodeDocument = gql`
    mutation removeNode($id: Int!) {
  removeNode(id: $id)
}
    `;
export type RemoveNodeMutationFn = Apollo.MutationFunction<RemoveNodeMutation, RemoveNodeMutationVariables>;

/**
 * __useRemoveNodeMutation__
 *
 * To run a mutation, you first call `useRemoveNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNodeMutation, { data, loading, error }] = useRemoveNodeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveNodeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveNodeMutation, RemoveNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveNodeMutation, RemoveNodeMutationVariables>(RemoveNodeDocument, options);
      }
export type RemoveNodeMutationHookResult = ReturnType<typeof useRemoveNodeMutation>;
export type RemoveNodeMutationResult = Apollo.MutationResult<RemoveNodeMutation>;
export type RemoveNodeMutationOptions = Apollo.BaseMutationOptions<RemoveNodeMutation, RemoveNodeMutationVariables>;
export const GetOResultsMappingsDocument = gql`
    query getOResultsMappings {
  oresultsMappings {
    id
    node_id
    api_key
  }
}
    `;

/**
 * __useGetOResultsMappingsQuery__
 *
 * To run a query within a React component, call `useGetOResultsMappingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOResultsMappingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOResultsMappingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOResultsMappingsQuery(baseOptions?: Apollo.QueryHookOptions<GetOResultsMappingsQuery, GetOResultsMappingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOResultsMappingsQuery, GetOResultsMappingsQueryVariables>(GetOResultsMappingsDocument, options);
      }
export function useGetOResultsMappingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOResultsMappingsQuery, GetOResultsMappingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOResultsMappingsQuery, GetOResultsMappingsQueryVariables>(GetOResultsMappingsDocument, options);
        }
export type GetOResultsMappingsQueryHookResult = ReturnType<typeof useGetOResultsMappingsQuery>;
export type GetOResultsMappingsLazyQueryHookResult = ReturnType<typeof useGetOResultsMappingsLazyQuery>;
export type GetOResultsMappingsQueryResult = Apollo.QueryResult<GetOResultsMappingsQuery, GetOResultsMappingsQueryVariables>;
export const OresultsMappingAddedDocument = gql`
    subscription oresultsMappingAdded {
  oresultsMappingAdded {
    id
    node_id
    api_key
  }
}
    `;

/**
 * __useOresultsMappingAddedSubscription__
 *
 * To run a query within a React component, call `useOresultsMappingAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOresultsMappingAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOresultsMappingAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOresultsMappingAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OresultsMappingAddedSubscription, OresultsMappingAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OresultsMappingAddedSubscription, OresultsMappingAddedSubscriptionVariables>(OresultsMappingAddedDocument, options);
      }
export type OresultsMappingAddedSubscriptionHookResult = ReturnType<typeof useOresultsMappingAddedSubscription>;
export type OresultsMappingAddedSubscriptionResult = Apollo.SubscriptionResult<OresultsMappingAddedSubscription>;
export const OresultsMappingRemovedDocument = gql`
    subscription oresultsMappingRemoved {
  oresultsMappingRemoved {
    id
    node_id
    api_key
  }
}
    `;

/**
 * __useOresultsMappingRemovedSubscription__
 *
 * To run a query within a React component, call `useOresultsMappingRemovedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOresultsMappingRemovedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOresultsMappingRemovedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOresultsMappingRemovedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OresultsMappingRemovedSubscription, OresultsMappingRemovedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OresultsMappingRemovedSubscription, OresultsMappingRemovedSubscriptionVariables>(OresultsMappingRemovedDocument, options);
      }
export type OresultsMappingRemovedSubscriptionHookResult = ReturnType<typeof useOresultsMappingRemovedSubscription>;
export type OresultsMappingRemovedSubscriptionResult = Apollo.SubscriptionResult<OresultsMappingRemovedSubscription>;
export const CreateOresultsMappingDocument = gql`
    mutation createOresultsMapping($input: CreateOresultsMappingInput!) {
  createOresultsMapping(createOresultsMappingInput: $input)
}
    `;
export type CreateOresultsMappingMutationFn = Apollo.MutationFunction<CreateOresultsMappingMutation, CreateOresultsMappingMutationVariables>;

/**
 * __useCreateOresultsMappingMutation__
 *
 * To run a mutation, you first call `useCreateOresultsMappingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOresultsMappingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOresultsMappingMutation, { data, loading, error }] = useCreateOresultsMappingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOresultsMappingMutation(baseOptions?: Apollo.MutationHookOptions<CreateOresultsMappingMutation, CreateOresultsMappingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOresultsMappingMutation, CreateOresultsMappingMutationVariables>(CreateOresultsMappingDocument, options);
      }
export type CreateOresultsMappingMutationHookResult = ReturnType<typeof useCreateOresultsMappingMutation>;
export type CreateOresultsMappingMutationResult = Apollo.MutationResult<CreateOresultsMappingMutation>;
export type CreateOresultsMappingMutationOptions = Apollo.BaseMutationOptions<CreateOresultsMappingMutation, CreateOresultsMappingMutationVariables>;
export const RemoveOresultsMappingDocument = gql`
    mutation removeOresultsMapping($id: Int!) {
  removeOresultsMapping(id: $id)
}
    `;
export type RemoveOresultsMappingMutationFn = Apollo.MutationFunction<RemoveOresultsMappingMutation, RemoveOresultsMappingMutationVariables>;

/**
 * __useRemoveOresultsMappingMutation__
 *
 * To run a mutation, you first call `useRemoveOresultsMappingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOresultsMappingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOresultsMappingMutation, { data, loading, error }] = useRemoveOresultsMappingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveOresultsMappingMutation(baseOptions?: Apollo.MutationHookOptions<RemoveOresultsMappingMutation, RemoveOresultsMappingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveOresultsMappingMutation, RemoveOresultsMappingMutationVariables>(RemoveOresultsMappingDocument, options);
      }
export type RemoveOresultsMappingMutationHookResult = ReturnType<typeof useRemoveOresultsMappingMutation>;
export type RemoveOresultsMappingMutationResult = Apollo.MutationResult<RemoveOresultsMappingMutation>;
export type RemoveOresultsMappingMutationOptions = Apollo.BaseMutationOptions<RemoveOresultsMappingMutation, RemoveOresultsMappingMutationVariables>;
export const PunchSubscriptionDocument = gql`
    subscription punchSubscription {
  punchAdded {
    id
    competition_id
    time
    receive_time
    si_number
    station_number
    seconds
  }
}
    `;

/**
 * __usePunchSubscriptionSubscription__
 *
 * To run a query within a React component, call `usePunchSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePunchSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePunchSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePunchSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<PunchSubscriptionSubscription, PunchSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PunchSubscriptionSubscription, PunchSubscriptionSubscriptionVariables>(PunchSubscriptionDocument, options);
      }
export type PunchSubscriptionSubscriptionHookResult = ReturnType<typeof usePunchSubscriptionSubscription>;
export type PunchSubscriptionSubscriptionResult = Apollo.SubscriptionResult<PunchSubscriptionSubscription>;
export const GetPunchesDocument = gql`
    query getPunches($after: DateTime) {
  punches(after: $after) {
    id
    competition_id
    time
    receive_time
    si_number
    station_number
    seconds
  }
}
    `;

/**
 * __useGetPunchesQuery__
 *
 * To run a query within a React component, call `useGetPunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPunchesQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetPunchesQuery(baseOptions?: Apollo.QueryHookOptions<GetPunchesQuery, GetPunchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPunchesQuery, GetPunchesQueryVariables>(GetPunchesDocument, options);
      }
export function useGetPunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPunchesQuery, GetPunchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPunchesQuery, GetPunchesQueryVariables>(GetPunchesDocument, options);
        }
export type GetPunchesQueryHookResult = ReturnType<typeof useGetPunchesQuery>;
export type GetPunchesLazyQueryHookResult = ReturnType<typeof useGetPunchesLazyQuery>;
export type GetPunchesQueryResult = Apollo.QueryResult<GetPunchesQuery, GetPunchesQueryVariables>;