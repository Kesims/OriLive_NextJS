"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import React from "react";
import { BasePanel } from "@/components/dashboard/panels/basePanel";
import Button from "@mui/material/Button";
export default function Dashboard() {
    return (
        <DashboardPage pageHeading={"Vítejte v dashboardu!"}>
            <BasePanel heading={"Dostupné jednotky O-Node"} size={8}>
                <div>something</div>
                <div>something</div>
                <Button variant="contained" fullWidth>
                    Správa zařízení
                </Button>
            </BasePanel>
            <BasePanel heading={"Propojení OResults"} size={4}>
                <div>something</div>
                <Button variant="contained" fullWidth>
                    Správa propojení
                </Button>
            </BasePanel>
            <BasePanel heading={"Síťové příkazy"} size={4}>
                <div>something</div>
                <Button variant="contained" fullWidth>
                    Správa příkazů
                </Button>
            </BasePanel>
            <BasePanel heading={"Zaznamenané ražení"} size={8}>
                <Button>something</Button>
                <Button>something else</Button>
                <Button variant="contained" fullWidth>
                    Detail ražení
                </Button>
            </BasePanel>
        </DashboardPage>
    );
}
