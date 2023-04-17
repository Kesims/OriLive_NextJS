import { OResultsMapping } from "@/src/generated/graphql";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import Button from "@mui/material/Button";

interface Props {
    oresultsMappings?: OResultsMapping[];
    removeMapping: (id: number) => Promise<boolean | undefined>;
}

export default function OResultsMappingsGrid({ oresultsMappings, removeMapping }: Props) {
    const columns: GridColDef[] = [
        {
            field: "node_id",
            headerName: "LOKÁLNÍ ID",
            headerClassName: "header-bgd",
            align: "center",
            headerAlign: "center",
            flex: 1,
            minWidth: 80,
        },
        {
            field: "api_key",
            headerName: "ORESULTS API KLÍČ",
            headerClassName: "header-bgd",
            align: "center",
            headerAlign: "center",
            flex: 1,
            minWidth: 120,
        },
        {
            field: "id",
            headerName: "",
            headerClassName: "header-bgd",
            align: "center",
            headerAlign: "center",
            flex: 0.75,
            minWidth: 80,
            renderCell: (params) => (
                <Box sx={{ p: 1 }}>
                    <Button variant={"contained"} onClick={() => removeMapping(params.value as number)}>
                        Odebrat
                    </Button>
                </Box>
            ),
        },
    ];

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
                rows={oresultsMappings ? oresultsMappings : []}
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
