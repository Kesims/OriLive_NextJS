import { useDevices } from "@/hooks/device/devices.hook";
import { useEffect, useState } from "react";
import { Device } from "@/hooks/device/device.types";

export function useActiveDevices(activeInSeconds: number) {
    const { allDevices } = useDevices();
    const [devices, setDevices] = useState<Device[]>();
    const [nodeCount, setNodeCount] = useState<number>();
    const [gatewayCount, setGatewayCount] = useState<number>();

    useEffect(() => {
        if (allDevices) {
            filterDevices();
        }
    }, [allDevices]);

    useEffect(() => {
        const interval = setInterval(() => {
            filterDevices();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const filterDevices = () => {
        if (allDevices)
            setDevices(
                allDevices.filter((node) => {
                    return new Date().getTime() - node.last_contact.getTime() < activeInSeconds * 1000;
                }),
            );
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

    useEffect(() => {
        updateCounts();
    }, [devices]);

    const updateCounts = () => {
        const newNodeCount = getNodes().length;
        const newGatewayCount = getGateways().length;
        setNodeCount(newNodeCount ? newNodeCount : 0);
        setGatewayCount(newGatewayCount ? newGatewayCount : 0);
    };

    return {
        allDevices: devices,
        nodes: getNodes(),
        gateways: getGateways(),
        nodeCount,
        gatewayCount,
    };
}
