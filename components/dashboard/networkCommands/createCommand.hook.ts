import { useCreateNetworkCommandMutation } from "@/src/generated/graphql";
import { useSnackbar } from "notistack";
import { ApolloError } from "@apollo/client";
import { NetworkCommandFormData } from "@/components/dashboard/networkCommands/networkCommand.types";
import { useTranslation } from "react-i18next";

export const useCreateCommand = () => {
    const [createCommand, { loading }] = useCreateNetworkCommandMutation({
        onCompleted: () => console.log("Command added."),
    });
    const { t } = useTranslation("dashboard", { keyPrefix: "networkCommands" });
    const { enqueueSnackbar } = useSnackbar();
    const createNetworkCommandHandler = async (formData: NetworkCommandFormData) => {
        if (loading) return;
        try {
            const result = await createCommand({
                variables: {
                    createNetworkCommandInput: {
                        competition_id: formData.competitionId,
                        type: formData.type,
                        data: parseInt(String(formData.data)),
                    },
                },
            });
            if (result.data?.createNetworkCommand) {
                enqueueSnackbar(t("commandAdded"), { variant: "success" });
            }
        } catch (e) {
            if (e instanceof ApolloError) {
                enqueueSnackbar(e.message, { variant: "error" });
            } else {
                enqueueSnackbar(t("unknownErrorOccurred"), { variant: "error" });
            }
        }
    };
    return { createNetworkCommandHandler, loading };
};
