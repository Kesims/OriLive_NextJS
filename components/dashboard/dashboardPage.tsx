import { DashboardPageHeader } from "@/components/dashboard/dashboardPageHeader";
import React, { ReactNode } from "react";
import { Box } from "@mui/material";
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
    return (
        <Box p={3} ml={4} mr={4}>
            <DashboardPageHeader text={pageHeading}>{headerChildren}</DashboardPageHeader>
            <Grid2 container justifyContent="space-between" mt={4} columnSpacing={3} rowSpacing={3}>
                {children}
            </Grid2>
        </Box>
    );
};
