import { useEffect, useState } from "react";
import {
    useGetNodesQuery,
    useNodeAddedSubscription,
    useNodeRemovedSubscription,
} from "@/src/generated/graphql";
import { Device } from "@/hooks/device/device.types";

export function useDevices() {
    const [devices, setDevices] = useState<Device[]>();
    const [nodeCount, setNodeCount] = useState<number>();
    const [gatewayCount, setGatewayCount] = useState<number>();

    const { data, loading } = useGetNodesQuery();

    const nodeAddedSubscription = useNodeAddedSubscription();
    const nodeRemovedSubscription = useNodeRemovedSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                processDevices();
            }
        }
    }, [loading]);

    useEffect(() => {
        updateCounts();
    }, [devices]);

    // Handles device updates and additions
    useEffect(() => {
        if (nodeAddedSubscription.data?.nodeAdded) {
            const node = nodeAddedSubscription.data.nodeAdded;
            const newDevice = {
                node_id: node.node_id,
                node_type: node.node_type,
                battery_level: node.battery_level,
                last_contact: new Date(node.last_contact),
                neighbours: node.neighbours.split(";"),
            };
            if (devices) {
                const newDevices = Array.from(devices);
                let update = false;
                newDevices.forEach((device) => {
                    if (device.node_id == newDevice.node_id) {
                        update = true;
                        Object.assign(device, newDevice);
                    }
                });
                if (!update) {
                    newDevices.push(newDevice);
                }
                setDevices(newDevices);
            } else setDevices([newDevice]);
        }
    }, [nodeAddedSubscription.data]);

    // Handles device removal
    useEffect(() => {
        if (nodeRemovedSubscription.data && devices) {
            const remove_id = nodeRemovedSubscription.data.nodeRemoved.node_id;
            const newDevices = { ...devices }.filter((node) => node.node_id !== remove_id);
            setDevices(newDevices);
        }
    }, [nodeRemovedSubscription.data]);

    const updateCounts = () => {
        const newNodeCount = getNodes().length;
        const newGatewayCount = getGateways().length;
        setNodeCount(newNodeCount ? newNodeCount : 0);
        setGatewayCount(newGatewayCount ? newGatewayCount : 0);
    };

    const processDevices = () => {
        if (data?.nodes) {
            const dv: Device[] = [];
            data.nodes.forEach((node) => {
                dv.push({
                    node_id: node.node_id,
                    node_type: node.node_type,
                    battery_level: node.battery_level,
                    last_contact: new Date(node.last_contact),
                    neighbours: node.neighbours.split(";"),
                });
            });
            setDevices(dv);
        }
    };

    const getNodes = () => {
        if (devices) {
            return devices.filter((node) => node.node_type == 1);
        }
        return [];
    };
    const getGateways = () => {
        if (devices) {
            return devices.filter((node) => node.node_type == 0);
        }
        return [];
    };

    return { allDevices: devices, nodes: getNodes(), gateways: getGateways(), nodeCount, gatewayCount };
}