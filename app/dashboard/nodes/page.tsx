"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useActiveDevices } from "@/hooks/device/activeDevices.hook";
import dynamic from "next/dynamic";
import { Box, LinearProgress } from "@mui/material";
import React from "react";
const NodeTableDynamic = dynamic(() => import("@/components/dashboard/nodes/nodeTable"), {
    loading: () => (
        <Box width={"100%"}>
            <LinearProgress sx={{ m: 2 }} />
        </Box>
    ),
    ssr: false,
});
export default function Nodes() {
    const { allDevices } = useActiveDevices(180);

    return (
        <DashboardPage
            pageHeading={"Správa zařízení"}
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
                    description={"dostupných zařízení"}
                />
            }
        >
            <NodeTableDynamic></NodeTableDynamic>
        </DashboardPage>
    );
}
