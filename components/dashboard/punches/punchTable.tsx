import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dynamicSort } from "@/components/utils/tables/dynamicSort";
import { BodyCell } from "@/components/utils/tables/tableCells/bodyCell";
import { HeaderCell } from "@/components/utils/tables/tableCells/headerCell";
import { useState } from "react";
import { Punch } from "@/hooks/punch/punch.types";

interface Props {
    punches?: Punch[];
    siNumberFilter: string[];
    stationNumberFilter: string[];
    competitionIdFilter: string[];
}

export default function PunchTable({
    siNumberFilter,
    stationNumberFilter,
    competitionIdFilter,
    punches,
}: Props) {
    const [sortColumn, setSortColumn] = useState("node_id");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const [page, setPage] = React.useState(0);
    const [visibleRows, setVisibleRows] = React.useState<Punch[] | null>(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    function sortClickHandler(column: string) {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    }

    React.useEffect(() => {
        const sorted = sortedPunches();
        if (sorted) {
            const rowsOnMount = sorted.slice(0, 8);
            setVisibleRows(rowsOnMount);
        }
    }, []);

    function getSortIconString(columnName: string) {
        return sortColumn === columnName ? sortDirection : undefined;
    }

    const filteredPunches = () => {
        if (!punches) return undefined;
        return punches.filter((punch) => {
            if (siNumberFilter.length > 0 && !siNumberFilter.includes(punch.siNumber)) return false;
            if (stationNumberFilter.length > 0 && !stationNumberFilter.includes(punch.stationNumber))
                return false;
            return !(competitionIdFilter.length > 0 && !competitionIdFilter.includes(punch.competitionId));
        });
    };

    const sortedPunches = () => {
        const punchesToSort = filteredPunches();
        if (!punchesToSort) return undefined;
        return punchesToSort.sort((a, b) => dynamicSort(sortColumn, sortDirection === "asc" ? 1 : -1)(a, b));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <HeaderCell
                            sortIcon={getSortIconString("station_number")}
                            onClick={() => sortClickHandler("station_number")}
                        >
                            Číslo kontroly
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("si_number")}
                            onClick={() => sortClickHandler("si_number")}
                        >
                            Číslo čipu
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("punch_time")}
                            onClick={() => sortClickHandler("punch_time")}
                        >
                            Čas ražení
                        </HeaderCell>
                        <HeaderCell
                            sortIcon={getSortIconString("receive_time")}
                            onClick={() => sortClickHandler("receive_time")}
                        >
                            Čas přijetí
                        </HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedPunches()?.map((punch) => (
                        <TableRow key={punch.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <BodyCell>{punch.stationNumber}</BodyCell>
                            <BodyCell>{punch.siNumber}</BodyCell>
                            <BodyCell>{punch.time.toLocaleString()}</BodyCell>
                            <BodyCell>{punch.receiveTime.toLocaleString()}</BodyCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
