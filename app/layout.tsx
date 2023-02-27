"use client";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/src/utils/theme";
import { client } from "@/src/utils/apolloClient";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
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
