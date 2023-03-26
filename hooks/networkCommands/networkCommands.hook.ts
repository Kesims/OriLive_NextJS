import { useEffect, useState } from "react";
import {
    NetworkCommand,
    useGetNetworkCommandsQuery,
    useNetworkCommandAddedSubscription,
    useNetworkCommandRemovedSubscription,
} from "@/src/generated/graphql";

export function useNetworkCommands() {
    const [networkCommands, setNetworkCommands] = useState<NetworkCommand[]>();

    const { data, loading } = useGetNetworkCommandsQuery();
    const networkCommandAdded = useNetworkCommandAddedSubscription();
    const networkCommandRemoved = useNetworkCommandRemovedSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                setNetworkCommands(data.networkCommands);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (networkCommandAdded.data) {
            const networkCommand = networkCommandAdded.data.networkCommandAdded;
            if (networkCommands) {
                setNetworkCommands([...networkCommands, networkCommand]);
            } else setNetworkCommands([networkCommand]);
        }
    }, [networkCommandAdded.data]);

    useEffect(() => {
        if (networkCommandRemoved.data) {
            const networkCommand = networkCommandRemoved.data.networkCommandRemoved;
            if (networkCommands) {
                setNetworkCommands([...networkCommands].filter((m) => m.id != networkCommand.id));
            }
        }
    }, [networkCommandRemoved.data]);

    const networkCommandCount = networkCommands !== undefined ? networkCommands.length : undefined;

    return { networkCommands, networkCommandCount };
}
