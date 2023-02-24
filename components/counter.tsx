import { useEffect, useState } from "react";
import { useLoginMutationMutation } from "@/src/generated/graphql";

const Counter: React.FC = () => {
	const [count, setCount] = useState(0);

	const [mutate] = useLoginMutationMutation();

	useEffect(() => {
		console.log("mount");
		return () => {
			console.log("unmount");
		};
	}, []);

	const buttonClickHandler = async () => {
		setCount((current) => current + 1);
		await mutate({ variables: { password: "pass", username: "username" } });
	};

	return <button onClick={() => buttonClickHandler()}>{count}</button>;
};
