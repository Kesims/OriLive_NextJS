import { useCreateOresultsMappingMutation } from "@/src/generated/graphql";
import { useSnackbar } from "notistack";
import { ApolloError } from "@apollo/client";
import { AddMappingFormData } from "@/components/dashboard/oresults/oresults.type";
import { useTranslation } from "react-i18next";

export const useCreateMapping = () => {
    const [createMapping, { loading }] = useCreateOresultsMappingMutation({
        onCompleted: () => console.log("Mapping added."),
    });
    const { enqueueSnackbar } = useSnackbar();
    const { t } = useTranslation("dashboard", { keyPrefix: "oresults" });

    const createMappingHandler = async (formData: AddMappingFormData) => {
        if (loading) return;
        try {
            const result = await createMapping({
                variables: {
                    input: {
                        local_id: String(formData.nodeId),
                        oresults_key: formData.oresultsKey,
                    },
                },
            });
            if (result.data?.createOresultsMapping) {
                enqueueSnackbar(t("deviceMappedSuccessfully"), { variant: "success" });
            }
        } catch (e) {
            if (e instanceof ApolloError) {
                enqueueSnackbar(e.message, { variant: "error" });
            } else {
                enqueueSnackbar(t("unknownErrorOccurred"), { variant: "error" });
            }
        }
    };
    return { createMappingHandler, loading };
};
