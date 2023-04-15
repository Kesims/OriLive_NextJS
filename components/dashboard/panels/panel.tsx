import React, { ReactNode } from "react";
import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface Props {
    md?: number;
    height?: number | string;
    children?: ReactNode | ReactNode[];
}

export const Panel: React.FC<Props> = ({ md, height, children }) => {
    const size = md ? md : 4;
    return (
        <Grid2 xs={12} md={size} height={height}>
            <Paper variant={"outlined"} sx={{ borderRadius: "6px", height: "100%" }}>
                {children}
            </Paper>
        </Grid2>
    );
};
