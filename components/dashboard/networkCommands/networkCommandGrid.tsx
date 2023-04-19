import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import * as React from "react";
import { NetworkCommand } from "@/src/generated/graphql";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const columns = (t: TFunction<"dashboard", "networkCommands", "dashboard">): GridColDef[] => [
    { field: "id", headerName: "ID", headerClassName: "header-bgd", flex: 1, minWidth: 120 },

    {
        field: "competition_id",
        headerName: t("competitionId").toString(),
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "type",
        headerName: t("commandType").toString(),
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "data",
        headerName: t("commandData").toString(),
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 80,
    },
    {
        field: "creation_time",
        headerName: t("creationTime").toString(),
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
    const { t } = useTranslation("dashboard", { keyPrefix: "networkCommands" });

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
                columns={columns(t)}
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
