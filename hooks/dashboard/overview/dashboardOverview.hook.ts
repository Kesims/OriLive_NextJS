import { useEffect, useState } from "react";
import { useActiveDevices } from "@/hooks/device/activeDevices.hook";
import { usePunches } from "@/hooks/punch/punches.hook";
import { useOResults } from "@/hooks/oresults/oresults.hook";
import { useNetworkCommands } from "@/hooks/networkCommands/networkCommands.hook";
import { useTranslation } from "react-i18next";

export function useDashboardOverview() {
    const devices = useActiveDevices(180);

    const afterDate = new Date(new Date(new Date().getTime() - 3600000).toString());
    // toDateString is a hacky way to prevent the thingy doing infinite requests due to date object changing...
    const punches = usePunches(afterDate);
    const [punchText, setPunchText] = useState<string>();

    const oresultsMappings = useOResults();
    const [oresultsMappingsText, setOResultsMappingsText] = useState<string>();

    const networkCommands = useNetworkCommands();
    const [networkCommandsText, setNetworkCommandsText] = useState<string>();
    const { t } = useTranslation("dashboard", { keyPrefix: "overview" });

    useEffect(() => {
        if (punches.latestDatePunch !== undefined) {
            const diffInMinutes = Math.floor(
                (new Date().getTime() - punches.latestDatePunch.receiveTime.getTime()) / 60000,
            );
            setPunchText(t("lastPunch", { diffInMinutes: diffInMinutes }).toString());
        } else {
            setPunchText(t("lastPunch", { diffInMinutes: t("moreThan60") }).toString());
        }
    }, [punches.punches]);

    useEffect(() => {
        if (oresultsMappings.mappingsCount !== undefined) {
            setOResultsMappingsText(
                t("oresultsDevicesMapped", { count: oresultsMappings.mappingsCount }).toString(),
            );
        }
    }, [oresultsMappings.mappingsCount]);

    useEffect(() => {
        if (networkCommands.networkCommandCount !== undefined) {
            setNetworkCommandsText(
                t("commandsActive", { count: networkCommands.networkCommandCount }).toString(),
            );
        }
    }, [networkCommands.networkCommandCount]);

    return {
        nodeCount: devices.nodeCount,
        gatewayCount: devices.gatewayCount,
        punchCount: punches.punchCount,
        punchText,
        networkCommandsText,
        oresultsMappingsText,
    };
}
