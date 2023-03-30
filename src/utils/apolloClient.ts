import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
});

const wsLink =
    typeof window !== "undefined"
        ? new GraphQLWsLink(
              createClient({
                  url: "ws://localhost:3001/graphql",
                  connectionParams: () => ({
                      isWebSocket: true,
                  }),
              }),
          )
        : null;

const splitLink =
    typeof window !== "undefined" && wsLink != null
        ? split(
              // split based on operation type
              ({ query }) => {
                  const definition = getMainDefinition(query);
                  return definition.kind === "OperationDefinition" && definition.operation === "subscription";
              },
              wsLink,
              httpLink,
          )
        : httpLink;

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
});
