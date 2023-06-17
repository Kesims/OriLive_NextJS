"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useActiveDevices } from "@/hooks/device/activeDevices.hook";
import dynamic from "next/dynamic";
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import useCompetitionId from "@/hooks/competitionId/competitionId.hook";
const NodeTableDynamic = dynamic(() => import("@/components/dashboard/nodes/nodeTable"), {
    loading: () => (
        <Box width={"100%"}>
            <LinearProgress sx={{ m: 2 }} />
        </Box>
    ),
    ssr: false,
});
export default function Nodes({ params }: { params: { competitionId: string } }) {
    useCompetitionId(params.competitionId);
    const { allDevices } = useActiveDevices(180);
    const { t } = useTranslation("dashboard", { keyPrefix: "devices" });

    return (
        <DashboardPage
            pageHeading={t("title")}
            headerChildren={
                <LargeNumericInfo
                    statusColor={
                        allDevices?.length
                            ? allDevices.length > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={allDevices?.length}
                    description={t("devicesAvailable")}
                />
            }
        >
            <NodeTableDynamic />
        </DashboardPage>
    );
}
