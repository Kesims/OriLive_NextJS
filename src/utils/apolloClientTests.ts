import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

export function createTestClient() {
    const link = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        credentials: "include",
        fetch,
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link,
    });
}
