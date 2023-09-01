"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { BasePanel } from "@/components/dashboard/panels/basePanel";
import Button from "@mui/material/Button";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { TextInfo } from "@/components/dashboard/info/textInfo";
import { Stack } from "@mui/material";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useDashboardOverview } from "@/hooks/dashboard/overview/dashboardOverview.hook";
import { urlConf, withID } from "@/src/urlConf";
import { useTranslation } from "react-i18next";
import useCompetitionId from "@/hooks/competitionId/competitionId.hook";
import { useContext } from "react";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";

export default function Dashboard({ params }: { params: { competitionId: string } }) {
    const { nodeCount, gatewayCount, punchCount, punchText, networkCommandsText, oresultsMappingsText } =
        useDashboardOverview();
    const { t } = useTranslation("dashboard", { keyPrefix: "overview" });
    useCompetitionId(params.competitionId);
    const context = useContext(CompetitionContext);

    return (
        <DashboardPage pageHeading={t("title")}>
            <BasePanel
                heading={t("onodesTitle")}
                size={8}
                button={
                    <Button
                        variant="contained"
                        fullWidth
                        disableElevation
                        sx={{ mt: 1.5 }}
                        href={withID(urlConf.dashboard.nodes, context.competition?.competitionId)}
                    >
                        {t("deviceSettingsButton")}
                    </Button>
                }
            >
                <LargeNumericInfo
                    statusColor={
                        nodeCount
                            ? nodeCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={nodeCount}
                    description={t("devicesAsGateways")}
                />
                <LargeNumericInfo
                    statusColor={
                        gatewayCount
                            ? gatewayCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={gatewayCount}
                    description={t("devicesAsNodes")}
                />
            </BasePanel>
            <BasePanel
                heading={t("oresultsTitle")}
                size={4}
                button={
                    <Button
                        variant="contained"
                        fullWidth
                        disableElevation
                        sx={{ mt: 1.5 }}
                        href={withID(urlConf.dashboard.oresults, context.competition?.competitionId)}
                    >
                        {t("oresultsSettingsButton")}
                    </Button>
                }
            >
                <Stack>
                    <TextInfo
                        statusColor={oresultsMappingsText ? StatusIconColor.green : StatusIconColor.red}
                        description={oresultsMappingsText}
                    />
                    {/*<TextInfo*/}
                    {/*    statusColor={StatusIconColor.gray}*/}
                    {/*    // description={"Odesílání dat do OResults zapnuto"}*/}
                    {/*    description={undefined}*/}
                    {/*/>*/}
                </Stack>
            </BasePanel>
            <BasePanel
                heading={t("networkCommandsTitle")}
                size={4}
                button={
                    <Button
                        variant="contained"
                        fullWidth
                        disableElevation
                        sx={{ mt: 1.5 }}
                        href={withID(urlConf.dashboard.networkCommands, context.competition?.competitionId)}
                    >
                        {t("networkCommandsSettingsButton")}
                    </Button>
                }
            >
                <TextInfo
                    statusColor={networkCommandsText ? StatusIconColor.green : StatusIconColor.red}
                    description={networkCommandsText}
                ></TextInfo>
            </BasePanel>
            <BasePanel
                heading={t("punchesTitle")}
                size={8}
                button={
                    <Button
                        variant="contained"
                        fullWidth
                        disableElevation
                        sx={{ mt: 1.5 }}
                        href={withID(urlConf.dashboard.punches, context.competition?.competitionId)}
                    >
                        {t("punchesSettingsButton")}
                    </Button>
                }
            >
                <TextInfo
                    statusColor={
                        punchCount
                            ? punchCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    description={punchText}
                />
                <LargeNumericInfo
                    statusColor={
                        punchCount
                            ? punchCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={punchCount}
                    description={t("punchesInLastHour")}
                />
            </BasePanel>
        </DashboardPage>
    );
}
