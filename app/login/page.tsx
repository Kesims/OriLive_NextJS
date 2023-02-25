"use client";

import { LoginForm } from "@/components/login";
import { Container } from "@mui/material";

export default function Login() {
	return (
		<Container component="main" maxWidth="xs">
			<LoginForm />
		</Container>
	);
}
