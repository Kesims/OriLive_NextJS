import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import * as React from "react";
import { NetworkCommand } from "@/src/generated/graphql";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", headerClassName: "header-bgd", flex: 1, minWidth: 120 },

    {
        field: "competition_id",
        headerName: "ID ZÁVODU",
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "type",
        headerName: "TYP",
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "data",
        headerName: "DATA",
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "creation_time",
        headerName: "ČAS VYTVOŘENÍ",
        headerClassName: "header-bgd",
        valueFormatter: (params) =>
            typeof params.value === "string" && new Date(params.value).toLocaleString(),
        flex: 1,
        minWidth: 220,
    },
];

interface Props {
    networkCommands?: NetworkCommand[];
}

export default function NetworkCommandGrid({ networkCommands }: Props) {
    return (
        <Box
            sx={(theme) => ({
                height: "100%",
                "& .header-bgd": {
                    backgroundColor: theme.palette.primary.main,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: theme.palette.common.white,
                },
                py: 1,
            })}
        >
            <DataGrid
                rows={networkCommands ? networkCommands : []}
                columns={columns}
                disableColumnSelector={true}
                disableRowSelectionOnClick={true}
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
