import { Panel } from "@/components/dashboard/panels/panel";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Switch, Typography } from "@mui/material";
import React from "react";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";
import { useUpdateCompetitionMutation } from "@/src/generated/graphql";
import { useSnackbar } from "notistack";

export default function ToggleOresultsIntegration() {
    const { t } = useTranslation("dashboard", { keyPrefix: "oresults" });
    const context = React.useContext(CompetitionContext);
    const [updateCompetition] = useUpdateCompetitionMutation();
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        if (context.competition === undefined) {
            return;
        }

        const { data } = await updateCompetition({
            variables: {
                competition: {
                    id: context.competition?.competitionId,
                    competitionId: context.competition?.competitionId,
                    name: context.competition?.name,
                    type: context.competition?.type,
                    location: context.competition?.location,
                    startTime: context.competition?.startTime,
                    organizer: context.competition?.organizer,
                    description: context.competition?.description,
                    oresultsIntegration: checked,
                },
            },
        });
        if (data?.updateCompetition) {
            enqueueSnackbar(t("integrationToggleSuccess"), { variant: "success" });
        } else {
            enqueueSnackbar(t("integrationToggleError"), { variant: "error" });
        }
    };

    return (
        <Panel md={12}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 4,
                }}
            >
                <Typography component="h4" variant="h5" sx={{ textTransform: "uppercase", paddingBottom: 3 }}>
                    {t("toggleOresultsIntegration")}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", paddingX: 3 }} width={"100%"}>
                    <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                        <Typography>{t("sendDataToOresults")}</Typography>
                    </Box>
                    <Switch
                        checked={context.competition?.oresultsIntegration ?? false}
                        onChange={handleChange}
                        defaultChecked={true}
                    />
                </Box>
            </Box>
        </Panel>
    );
}
