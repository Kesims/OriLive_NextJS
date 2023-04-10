"use client";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { Panel } from "@/components/dashboard/panels/panel";
import { LargeNumericInfo } from "@/components/dashboard/info/largeNumericInfo";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { useActiveDevices } from "@/hooks/device/activeDevices.hook";
import dynamic from "next/dynamic";
import NodeGrid from "@/components/dashboard/nodes/nodeGrid";
const NodeTableDynamic = dynamic(() => import("@/components/dashboard/nodes/nodeTable"), {
    loading: () => <p>Loading...</p>,
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
            <Panel md={12}>
                <NodeTableDynamic></NodeTableDynamic>
            </Panel>
        </DashboardPage>
    );
}
