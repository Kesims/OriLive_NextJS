import { useRegisterMutationMutation } from "@/src/generated/graphql";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { RegisterFormData } from "@/components/register/register.types";
import { useTranslation } from "react-i18next";

export const useRegister = () => {
    const { t } = useTranslation("register");
    const [register, { loading }] = useRegisterMutationMutation({
        onCompleted: () => console.log("Registration successful."),
    });
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const registrationHandler = async (formData: RegisterFormData) => {
        if (loading) return;

        if (formData.password !== formData.repeatPassword) {
            enqueueSnackbar(t("passwordsDoNotMatch"), { variant: "error" });
            return;
        }

        try {
            await register({
                variables: {
                    password: formData.password,
                    username: formData.username,
                },
            });
            enqueueSnackbar(t("registrationSuccessful"), { variant: "success" });
            router.push("/login");
        } catch (e) {
            if (e instanceof ApolloError) {
                enqueueSnackbar(e.message, { variant: "error" });
            } else {
                enqueueSnackbar(t("unknownErrorOccurred"), { variant: "error" });
            }
        }
    };
    return { registrationHandler, loading };
};
