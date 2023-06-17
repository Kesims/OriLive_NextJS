"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { BasePanel } from "@/components/dashboard/panels/basePanel";
import Button from "@mui/material/Button";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { TextInfo } from "@/components/dashboard/info/textInfo";
import { Stack } from "@mui/material";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useDashboardOverview } from "@/hooks/dashboard/overview/dashboardOverview.hook";
import { urlConf } from "@/src/urlConf";
import { useTranslation } from "react-i18next";
import useCompetitionId from "@/hooks/competitionId/competitionId.hook";

export default function Dashboard({ params }: { params: { competitionId: string } }) {
    const { nodeCount, gatewayCount, punchCount, punchText, networkCommandsText, oresultsMappingsText } =
        useDashboardOverview();
    const { t } = useTranslation("dashboard", { keyPrefix: "overview" });
    useCompetitionId(params.competitionId);

    return (
        <DashboardPage pageHeading={t("title")}>
            <BasePanel
                heading={t("onodesTitle")}
                size={8}
                button={
                    <Button variant="contained" fullWidth disableElevation href={urlConf.dashboard.nodes}>
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
                    description={t("devicesAsNodes")}
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
                    description={t("devicesAsGateways")}
                />
            </BasePanel>
            <BasePanel
                heading={t("oresultsTitle")}
                size={4}
                button={
                    <Button variant="contained" fullWidth disableElevation href={urlConf.dashboard.oresults}>
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
                        href={urlConf.dashboard.networkCommands}
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
                    <Button variant="contained" fullWidth disableElevation href={urlConf.dashboard.punches}>
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
