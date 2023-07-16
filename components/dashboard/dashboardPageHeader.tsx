import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface Props {
    text: string;
    children?: ReactNode | ReactNode[];
}

const gridItemStyle = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
};

export const DashboardPageHeader: React.FC<Props> = ({ text, children }) => {
    return (
        <Grid2 container mt={1} mb={2} mx={1}>
            <Grid2 md={5} xs={12} sx={gridItemStyle}>
                <Typography variant="h4" fontWeight={"bolder"} sx={{ textTransform: "uppercase" }}>
                    {text}
                </Typography>
            </Grid2>
            <Grid2
                md={7}
                xs={12}
                sx={(theme) => ({ ...gridItemStyle, [theme.breakpoints.down("md")]: { display: "none" } })}
            >
                <Box sx={{ display: "flex", justifyContent: "right" }}>{children}</Box>
            </Grid2>
        </Grid2>
    );
};
