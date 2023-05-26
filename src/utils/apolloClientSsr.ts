import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import type { NextRequest } from "next/server";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

export function createSsrClient(req: NextRequest) {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        credentials: "include",
        headers: {
            cookie: req.headers.get("Cookie") ?? "",
        },
    });

    const wsLink =
        typeof window !== "undefined"
            ? new GraphQLWsLink(
                  createClient({
                      // url: "ws://localhost:3001/graphql",
                      url: process.env.NEXT_PUBLIC_WS_API_URL
                          ? process.env.NEXT_PUBLIC_WS_API_URL
                          : "wss://api.orilive.live/graphql",
                  }),
              )
            : null;

    const splitLink =
        typeof window !== "undefined" && wsLink != null
            ? split(
                  // split based on operation type
                  ({ query }) => {
                      const definition = getMainDefinition(query);
                      return (
                          definition.kind === "OperationDefinition" && definition.operation === "subscription"
                      );
                  },
                  wsLink,
                  httpLink,
              )
            : httpLink;

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: splitLink,
        ssrMode: true,
    });
}
