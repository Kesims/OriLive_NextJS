import { useLoginMutationMutation } from "@/src/generated/graphql";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { LoginFormData } from "./login.types";

export const useLogin = () => {
    const [login] = useLoginMutationMutation({ onCompleted: () => console.log("Login successful.") });
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const loginHandler = async (formData: LoginFormData) => {
        try {
            await login({
                variables: {
                    password: formData.password,
                    username: formData.username,
                },
            });
            router.push("/dashboard");
        } catch (e) {
            if (e instanceof ApolloError) {
                enqueueSnackbar(e.message, { variant: "error" });
            } else {
                enqueueSnackbar("Došlo k neznámé chybě", { variant: "error" });
            }
        }
    };
    return { loginHandler };
};
