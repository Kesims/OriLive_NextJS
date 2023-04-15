"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { useNetworkCommands } from "@/hooks/networkCommands/networkCommands.hook";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddCommand from "@/components/dashboard/networkCommands/addCommand";
import NetworkCommandGrid from "@/components/dashboard/networkCommands/networkCommandGrid";

export default function NetworkCommands() {
    const networkCommands = useNetworkCommands();

    return (
        <DashboardPage
            pageHeading={"Síťové příkazy"}
            headerChildren={
                <LargeNumericInfo
                    statusColor={
                        networkCommands.networkCommands ? StatusIconColor.green : StatusIconColor.red
                    }
                    value={networkCommands.networkCommandCount}
                    description={"aktivních síťových příkazů"}
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