import TableCell from "@mui/material/TableCell";
import * as React from "react";

export function BodyCell({ children }: { children?: React.ReactNode }) {
    return <TableCell align={"center"}>{children}</TableCell>;
}
