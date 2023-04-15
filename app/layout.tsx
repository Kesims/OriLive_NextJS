"use client";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/src/utils/theme";
import { client } from "@/src/utils/apolloClient";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head>
                <title>OriLive</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="OriLive - LoRa mesh network based split time collection system for orienteering"
                />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ApolloProvider client={client}>
                        <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
                    </ApolloProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
