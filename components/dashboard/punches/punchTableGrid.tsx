import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Punch } from "@/hooks/punch/punch.types";
import { Box } from "@mui/material";
import { theme } from "@/src/utils/theme";

const columns: GridColDef[] = [
    {
        field: "stationNumber",
        headerName: "ČÍSLO KONTROLY",
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 120,
    },
    { field: "siNumber", headerName: "ČÍSLO ČIPU", headerClassName: "header-bgd", flex: 1, minWidth: 120 },
    {
        field: "time",
        headerName: "ČAS RAŽENÍ",
        headerClassName: "header-bgd",
        valueFormatter: (params) => params.value.toLocaleString(),
        flex: 1,
        minWidth: 180,
    },
    {
        field: "receiveTime",
        headerName: "ČAS PŘIJETÍ",
        headerClassName: "header-bgd",
        valueFormatter: (params) => params.value.toLocaleString(),
        flex: 1,
        minWidth: 180,
    },
];

interface Props {
    punches?: Punch[];
}

export default function PunchTableGrid({ punches }: Props) {
    return (
        <Box
            sx={{
                height: "100%",
                "& .header-bgd": {
                    backgroundColor: theme.palette.primary.main,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: theme.palette.common.white,
                },
            }}
        >
            <DataGrid
                rows={punches ? punches : []}
                columns={columns}
                autoPageSize={true}
                disableColumnSelector={true}
                disableRowSelectionOnClick={true}
                rowHeight={40}
                sx={{
                    "& .MuiDataGrid-sortIcon": {
                        opacity: 1,
                        color: "white",
                    },
                    "& .MuiDataGrid-menuIconButton": {
                        opacity: 1,
                        color: "white",
                    },
                    "& .MuiDataGrid-filterIcon": {
                        opacity: 1,
                        color: "white",
                    },
                }}
            />
        </Box>
    );
}
