import { GetDashboardOverviewQuery } from "@/src/generated/graphql";
import { useState } from "react";

export function useDashboardOverview() {
    const [nodeCount, setNodeCount] = useState<number>();
    const [gatewayCount, setGatewayCount] = useState<number>();
    const [punchCount, setPunchCount] = useState<number>();
    const [punchText, setPunchText] = useState<string>();
    const [networkCommandsText, setNetworkCommandsText] = useState<string>();
    const processGqlData = (data: GetDashboardOverviewQuery) => {
        const newNodeCount = data.nodes.filter((node) => node.node_type === 1).length;
        const newGatewayCount = data.nodes.filter((node) => node.node_type === 0).length;
        setNodeCount(newNodeCount ? newNodeCount : 0);
        setGatewayCount(newGatewayCount ? newGatewayCount : 0);

        const newPunchCount = data.punches.filter(
            (punch) => new Date().getTime() - new Date(punch.receive_time).getTime() < 3600000,
        ).length;
        setPunchCount(newPunchCount);

        const latestDatePunch = data.punches.reduce((latest, punch) => {
            const receiveTimeDate = new Date(punch.receive_time);
            const latestReceiveTimeDate = new Date(latest.receive_time);
            return receiveTimeDate > latestReceiveTimeDate ? punch : latest;
        });

        const diffInMinutes = Math.floor(
            (new Date().getTime() - new Date(latestDatePunch.receive_time).getTime()) / 60000,
        );
        setPunchText(`Poslední ražení: ${diffInMinutes} minut zpět`);

        const networkCommandCount = data.networkCommands.length;
        setNetworkCommandsText(`${networkCommandCount} aktivních síťových příkazů`);
    };

    return {
        nodeCount,
        gatewayCount,
        punchCount,
        punchText,
        networkCommandsText,
        processGqlData,
    };
}
