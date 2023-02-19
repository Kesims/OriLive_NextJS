"use client";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Button from "@mui/material/Button";
export default function Home() {
	return (
		<main>
			<h1>Hello world!</h1>
			<Button variant="contained">Work</Button>
			<div>test</div>
		</main>
	);
}
