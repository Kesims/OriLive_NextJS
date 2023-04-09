import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDevices } from "@/hooks/device/devices.hook";
import { StatusIconColor } from "../info/parts/statusIcon.types";
import { StatusIcon } from "../info/parts/statusIcon";
import Battery20 from "@mui/icons-material/Battery20";
import Battery50 from "@mui/icons-material/Battery50";
import Battery80 from "@mui/icons-material/Battery80";
import BatteryFull from "@mui/icons-material/BatteryFull";
import Battery0Bar from "@mui/icons-material/Battery0Bar";
import BatteryUnknownIcon from "@mui/icons-material/BatteryUnknown";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Button, Tooltip } from "@mui/material";
import { HeaderCell } from "./cells/headerCell";
import { BodyCell } from "./cells/bodyCell";

const renderBattery = (batteryLevel: number) => {
    switch (batteryLevel) {
        case 0:
            return <Battery0Bar />;
        case 1:
            return <Battery20 />;
        case 2:
            return <Battery50 />;
        case 3:
            return <Battery80 />;
        case 4:
            return <BatteryFull />;
        default:
            return <BatteryUnknownIcon />;
    }
};

function dynamicSort<T>(property: string, sortOrder: number) {
    return function (a: T, b: T) {
        const result =
            a[property as keyof T] < b[property as keyof T]
                ? -1
                : a[property as keyof T] > b[property as keyof T]
                ? 1
                : 0;
        return result * sortOrder;
    };
}

export default function NodeTable() {
    const { allDevices, removeDevice } = useDevices();
    const [sortColumn, setSortColumn] = React.useState("node_id");
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

    function sortClickHandler(column: string) {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    }

    function getSortIconString(columnName: string) {
        return sortColumn === columnName ? sortDirection : undefined;
    }

    const sortedDevices = () => {
        if (!allDevices) return undefined;
        return allDevices.sort((a, b) => dynamicSort(sortColumn, sortDirection === "asc" ? 1 : -1)(a, b));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <HeaderCell
                            sortIcon={getSortIconString("node_id")}
                            onClick={() => sortClickHandler("node_id")}
                        >
                            ID jednotky
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("node_type")}
                            onClick={() => sortClickHandler("node_type")}
                        >
                            Typ jednotky
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("battery_level")}
                            onClick={() => sortClickHandler("battery_level")}
                        >
                            Stav baterie
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("last_contact")}
                            onClick={() => sortClickHandler("last_contact")}
                        >
                            Poslední update
                        </HeaderCell>
                        <HeaderCell>Online</HeaderCell>
                        <HeaderCell></HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedDevices()?.map((device) => (
                        <TableRow
                            key={device.node_id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <BodyCell>{device.node_id}</BodyCell>
                            <BodyCell>{device.node_type ? "GATEWAY" : "NODE"}</BodyCell>
                            <BodyCell>{renderBattery(device.battery_level)}</BodyCell>
                            <BodyCell>{device.last_contact.toLocaleString()}</BodyCell>
                            <BodyCell>
                                {device.last_contact > new Date(new Date().getTime() - 3 * 60000) ? (
                                    <StatusIcon color={StatusIconColor.green} />
                                ) : (
                                    <StatusIcon color={StatusIconColor.red} />
                                )}
                            </BodyCell>
                            <BodyCell>
                                <Tooltip title={"Delete (ID " + device.node_id + ")"} followCursor={true}>
                                    <Button
                                        onClick={async () => {
                                            await removeDevice(device.id);
                                        }}
                                    >
                                        <DeleteForeverRoundedIcon sx={{ color: "black" }} />
                                    </Button>
                                </Tooltip>
                            </BodyCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
