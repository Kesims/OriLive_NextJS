import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import type { NextRequest } from "next/server";

export function createSsrClient(req: NextRequest) {
    const link = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        credentials: "include",
        headers: {
            cookie: req.headers.get("Cookie") ?? "",
        },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link,
        ssrMode: true,
    });
}
