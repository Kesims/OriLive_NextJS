"use client";
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Login() {
	const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const username = form.get("username");
		const password = form.get("password");

		const client = new ApolloClient({
			uri: "http://localhost:3001/graphql",
			cache: new InMemoryCache(),
		});
		try {
			const { data } = await client.query({
				query: ,
				variables: {
					username: username,
					password: password,
				},
			});
			console.log(data);
		} catch (error) {
			console.log("Error occurred");
			console.log(error);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h4">
					Přihlášení
				</Typography>
				<Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Uživatelské jméno"
						name="username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Heslo"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Zapamatovat si údaje"
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Přihlásit se
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
