"use client";
import { useOResults } from "@/hooks/oresults/oresults.hook";
import React from "react";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddMapping from "@/components/dashboard/oresults/addMapping";
import OResultsMappingsGrid from "@/components/dashboard/oresults/oresultsMappingsGrid";
import { useTranslation } from "react-i18next";

export default function Oresults() {
    const oresults = useOResults();
    const { t } = useTranslation("dashboard", { keyPrefix: "oresults" });

    return (
        <DashboardPage
            pageHeading={t("title")}
            headerChildren={
                <LargeNumericInfo
                    statusColor={oresults.mappings ? StatusIconColor.green : StatusIconColor.red}
                    value={oresults.mappingsCount}
                    description={t("unitsMapped")}
                />
            }
        >
            <Grid2 container spacing={2} width={"100%"} sx={{ p: 2, minHeight: "calc(100vh - 160px)" }}>
                <Grid2 xs={12} md={4}>
                    <AddMapping />
                </Grid2>
                <Grid2 xs={12} md={8} sx={{ minHeight: "100%" }}>
                    <OResultsMappingsGrid
                        oresultsMappings={oresults.mappings}
                        removeMapping={oresults.removeMapping}
                    />
                </Grid2>
            </Grid2>
        </DashboardPage>
    );
}
