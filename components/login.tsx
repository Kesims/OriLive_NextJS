import { useLoginMutationMutation } from "@/src/generated/graphql";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

export function LoginForm() {
	const [login] = useLoginMutationMutation({ onCompleted: () => console.log("Login successful.") });
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();

	const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const formData = JSON.parse(JSON.stringify(Object.fromEntries(form)));
		try {
			await login({
				variables: {
					password: formData.password,
					username: formData.username,
				},
			});
			router.push("dashboard");
		} catch (e) {
			if (e instanceof ApolloError) {
				enqueueSnackbar(e.message, { variant: "error" });
			} else {
				enqueueSnackbar("Došlo k neznámé chybě", { variant: "error" });
			}
		}
	};

	return (
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
	);
}
