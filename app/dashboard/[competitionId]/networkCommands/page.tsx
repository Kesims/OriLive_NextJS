"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { useNetworkCommands } from "@/hooks/networkCommands/networkCommands.hook";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddCommand from "@/components/dashboard/networkCommands/addCommand";
import NetworkCommandGrid from "@/components/dashboard/networkCommands/networkCommandGrid";
import { useTranslation } from "react-i18next";
import useCompetitionId from "@/hooks/competitionId/competitionId.hook";

export default function NetworkCommands({ params }: { params: { competitionId: string } }) {
    useCompetitionId(params.competitionId);
    const networkCommands = useNetworkCommands();
    const { t } = useTranslation("dashboard", { keyPrefix: "networkCommands" });

    return (
        <DashboardPage
            pageHeading={t("title")}
            headerChildren={
                <LargeNumericInfo
                    statusColor={
                        networkCommands.networkCommands ? StatusIconColor.green : StatusIconColor.red
                    }
                    value={networkCommands.networkCommandCount}
                    description={t("activeCommands")}
                />
            }
        >
            <Grid2 container spacing={2} width={"100%"} sx={{ p: 2, minHeight: "calc(100vh - 160px)" }}>
                <Grid2 xs={12} md={4}>
                    <AddCommand />
                </Grid2>
                <Grid2 xs={12} md={8} sx={{ minHeight: "100%" }}>
                    <NetworkCommandGrid networkCommands={networkCommands.networkCommands} />
                </Grid2>
            </Grid2>
        </DashboardPage>
    );
}
