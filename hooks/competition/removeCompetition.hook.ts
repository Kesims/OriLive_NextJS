import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useRemoveCompetitionMutation } from "@/src/generated/graphql";
import { urlConf, withID } from "@/src/urlConf";
import { useTranslation } from "react-i18next";

export default function useRemoveCompetition() {
    const [removeCompetitionMutation, { loading, error }] = useRemoveCompetitionMutation();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const { t } = useTranslation("dashboard", { keyPrefix: "competition" });
    const removeCompetition = async (id: number) => {
        const { data } = await removeCompetitionMutation({
            variables: {
                id,
            },
        });
        if (data?.removeCompetition) {
            enqueueSnackbar(t("removedSuccessfully"), { variant: "success" });
            router.push(withID(urlConf.dashboard.overview));
        } else {
            enqueueSnackbar(error?.message, { variant: "error" });
        }
    };
    return { removeCompetition, loading, error };
}
