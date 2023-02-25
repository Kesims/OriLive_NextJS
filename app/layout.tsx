"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const client = new ApolloClient({
		uri: "http://localhost:3001/graphql",
		cache: new InMemoryCache(),
	});

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<CssBaseline />
				<ApolloProvider client={client}>
					<SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
				</ApolloProvider>
			</body>
		</html>
	);
}
