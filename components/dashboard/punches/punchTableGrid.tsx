import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Punch } from "@/hooks/punch/punch.types";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const columns = (t: TFunction<"dashboard", "punches", "dashboard">): GridColDef[] => [
    {
        field: "stationNumber",
        headerName: t("stationNumber").toString(),
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "siNumber",
        headerName: t("siNumber").toString(),
        headerClassName: "header-bgd",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "time",
        headerName: t("punchTime").toString(),
        headerClassName: "header-bgd",
        valueFormatter: (params) => params.value.toLocaleString(),
        flex: 1,
        minWidth: 180,
    },
    {
        field: "receiveTime",
        headerName: t("receiveTime").toString(),
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
    const { t } = useTranslation("dashboard", { keyPrefix: "punches" });
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
            })}
        >
            <DataGrid
                rows={punches ? punches : []}
                columns={columns(t)}
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
