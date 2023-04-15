"use client";
import React from "react";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { usePunches } from "@/hooks/punch/punches.hook";
import Grid2 from "@mui/material/Unstable_Grid2";
import PunchTableGrid from "@/components/dashboard/punches/punchTableGrid";

export default function Punches() {
    const afterDate = new Date(new Date(new Date().getTime() - 3600000).toString());
    const { punches, punchCount, minutesFromLastPunch } = usePunches(afterDate);

    return (
        <DashboardPage
            pageHeading={"Zaznamenané ražení"}
            headerChildren={[
                <LargeNumericInfo
                    key={1}
                    statusColor={
                        punchCount
                            ? punchCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={punchCount}
                    description={"ražení za poslední hodinu"}
                />,
                <LargeNumericInfo
                    key={2}
                    statusColor={
                        punchCount
                            ? punchCount > 0
                                ? StatusIconColor.green
                                : StatusIconColor.red
                            : StatusIconColor.red
                    }
                    value={minutesFromLastPunch}
                    description={"minut od poslednícho ražení"}
                />,
            ]}
        >
            <Grid2 xs={12} maxWidth={"100%"} height={"calc(100vh - 160px)"}>
                <PunchTableGrid punches={punches} />
            </Grid2>
        </DashboardPage>
    );
}
