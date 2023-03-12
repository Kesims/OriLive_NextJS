import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface Props {
    xs?: number;
    children?: ReactNode | ReactNode[];
}

export const Panel: React.FC<Props> = ({ xs, children }) => {
    const size = xs ? xs : 4;
    return (
        <Grid2 xs={size} md={size}>
            <Box sx={{ border: "solid thin", borderColor: "gray", borderRadius: "10px", height: "100%" }}>
                {children}
            </Box>
        </Grid2>
    );
};
