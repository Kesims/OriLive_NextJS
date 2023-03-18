"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import React, { useEffect } from "react";
import { BasePanel } from "@/components/dashboard/panels/basePanel";
import Button from "@mui/material/Button";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { TextInfo } from "@/components/dashboard/info/textInfo";
import { Stack } from "@mui/material";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useGetDashboardOverviewQuery } from "@/src/generated/graphql";
import { useDashboardOverview } from "@/app/dashboard/page.hook";

export default function Dashboard() {
    const { nodeCount, gatewayCount, punchCount, punchText, networkCommandsText, processGqlData } =
        useDashboardOverview();
    const { data, loading, error } = useGetDashboardOverviewQuery({ variables: {} });

    useEffect(() => {
        if (!loading) {
            if (data) {
                processGqlData(data);
            }
        }
    }, [loading]);

    return (
        <DashboardPage pageHeading={"Vítejte v dashboardu!"}>
            <BasePanel
                heading={"Dostupné jednotky O-Node"}
                size={8}
                button={
                    <Button variant="contained" fullWidth disableElevation>
                        Správa zařízení
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
                    description={"jednotek v režimu gateway"}
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
                    description={"jednotek v režimu node"}
                />
            </BasePanel>
            <BasePanel
                heading={"Propojení OResults"}
                size={4}
                button={
                    <Button variant="contained" fullWidth disableElevation>
                        Správa propojení
                    </Button>
                }
            >
                <Stack>
                    <TextInfo
                        statusColor={StatusIconColor.red}
                        // description={"Odesílání dat do OResults zapnuto"}
                        description={undefined}
                    />
                    <TextInfo statusColor={StatusIconColor.red} description={undefined} />
                </Stack>
            </BasePanel>
            <BasePanel
                heading={"Síťové příkazy"}
                size={4}
                button={
                    <Button variant="contained" fullWidth disableElevation>
                        Správa příkazů
                    </Button>
                }
            >
                <TextInfo
                    statusColor={networkCommandsText ? StatusIconColor.green : StatusIconColor.red}
                    description={networkCommandsText}
                ></TextInfo>
            </BasePanel>
            <BasePanel
                heading={"Zaznamenané ražení"}
                size={8}
                button={
                    <Button variant="contained" fullWidth disableElevation>
                        Detail ražení
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
                    description={"ražení za poslední hodinu"}
                />
            </BasePanel>
        </DashboardPage>
    );
}
