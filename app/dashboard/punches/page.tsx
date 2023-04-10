"use client";
import React, { useState } from "react";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { usePunches } from "@/hooks/punch/punches.hook";
import { BasePanel } from "@/components/dashboard/panels/basePanel";
import UniversalFilter from "@/components/dashboard/punches/universalFilter";
import Grid2 from "@mui/material/Unstable_Grid2";
import PunchTable from "@/components/dashboard/punches/punchTable";

export default function Punches() {
    const afterDate = new Date(new Date(new Date().getTime() - 3600000).toString());
    const {
        punches,
        punchCount,
        minutesFromLastPunch,
        uniqueCompetitions,
        uniqueSiNumbers,
        uniqueStationNumbers,
    } = usePunches(afterDate);

    const [selectedCompetitions, setSelectedCompetitions] = useState<string[]>([]);
    const [selectedStations, setSelectedStations] = useState<string[]>([]);
    const [selectedSiNumbers, setSelectedSiNumbers] = useState<string[]>([]);

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
            <BasePanel heading={"Filtr závodu"} size={4}>
                <UniversalFilter
                    options={uniqueCompetitions}
                    selectedValues={selectedCompetitions}
                    setSelectedVaues={setSelectedCompetitions}
                    title={"Zvolte závod(y)"}
                />
            </BasePanel>
            <BasePanel heading={"Filtr kontroly"} size={4}>
                <UniversalFilter
                    options={uniqueStationNumbers}
                    selectedValues={selectedStations}
                    setSelectedVaues={setSelectedStations}
                    title={"Zvolte kontrolu(y)"}
                />
            </BasePanel>
            <BasePanel heading={"Filtr čipu"} size={4}>
                <UniversalFilter
                    options={uniqueSiNumbers}
                    selectedValues={selectedSiNumbers}
                    setSelectedVaues={setSelectedSiNumbers}
                    title={"Zvolte čip(y)"}
                />
            </BasePanel>
            <Grid2 xs={12}>
                <PunchTable
                    siNumberFilter={selectedSiNumbers}
                    stationNumberFilter={selectedStations}
                    competitionIdFilter={selectedCompetitions}
                    punches={punches}
                />
            </Grid2>
        </DashboardPage>
    );
}
