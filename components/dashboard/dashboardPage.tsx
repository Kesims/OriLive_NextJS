import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";
import React, { ReactNode } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface DashboardPagePropsInterface {
    pageHeading: string;
    headerChildren?: ReactNode | ReactNode[];
    children?: ReactNode | ReactNode[];
}

export const DashboardPage: React.FC<DashboardPagePropsInterface> = ({
    pageHeading,
    headerChildren,
    children,
}) => {
    const theme = useTheme();
    const notMobile = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box paddingX={notMobile ? 4 : 1} marginX={notMobile ? 4 : 1}>
            <DashboardPageHeader text={pageHeading}> {headerChildren}</DashboardPageHeader>
            <Grid2 container justifyContent="space-between" mt={4} columnSpacing={3} rowSpacing={3}>
                {children}
            </Grid2>
        </Box>
    );
};
