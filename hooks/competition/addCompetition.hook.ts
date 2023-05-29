import { useCreateCompetitionMutation } from "@/src/generated/graphql";
import { useSnackbar } from "notistack";
import { AddCompetitionData } from "@/hooks/competition/competition.types";

export default function useAddCompetition() {
    const [addCompetitionMutation, { loading, error }] = useCreateCompetitionMutation();
    const { enqueueSnackbar } = useSnackbar();

    const addCompetition = async (formData: AddCompetitionData) => {
        const { data } = await addCompetitionMutation({
            variables: {
                competition: {
                    name: formData.name,
                    location: formData.location,
                    startTime: formData.startTime,
                    endTime: formData.endTime,
                    description: formData.description,
                    type: formData.type,
                    organizer: formData.organizer,
                },
            },
        });
        if (data?.createCompetition) {
            enqueueSnackbar("Competition added successfully.", { variant: "success" });
        } else {
            enqueueSnackbar(error?.message, { variant: "error" });
        }
    };

    return { addCompetition, loading, error };
}
