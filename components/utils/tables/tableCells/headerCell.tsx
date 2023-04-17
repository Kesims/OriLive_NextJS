import TableCell from "@mui/material/TableCell";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import * as React from "react";
import { Box } from "@mui/material";

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    sortIcon?: string;
}

function SortIcon(sortIcon?: string) {
    if (sortIcon === "asc") {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                <ArrowUpwardRoundedIcon sx={{ marginX: 1, width: "25px" }} />
            </Box>
        );
    } else if (sortIcon === "desc") {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                <ArrowDownwardRoundedIcon sx={{ marginX: 1, width: "25px" }} />{" "}
            </Box>
        );
    } else {
        return <Box sx={{ width: "25px", marginX: 1 }} />;
    }
}

export function HeaderCell(props: Props) {
    return (
        <TableCell
            onClick={props.onClick}
            align={"center"}
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "default",
            })}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "calc(100% - 35px)",
                }}
            >
                {SortIcon(props.sortIcon)}
                {props.children}
            </Box>
        </TableCell>
    );
}
