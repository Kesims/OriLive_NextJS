import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSsrClient } from "./src/utils/apolloClientSsr";
import { CheckLoginDocument, CheckLoginQuery } from "@/src/generated/graphql";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    if (!request.cookies.has("connect.sid")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
        const client = createSsrClient(request);
        const result = await client.query<CheckLoginQuery>({ query: CheckLoginDocument });
        if (!result.data.checkLogin) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } catch (e) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: "/dashboard/:path*",
};
