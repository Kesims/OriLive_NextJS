import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import { StatusIcon } from "@/components/dashboard/info/parts/statusIcon";

interface Props {
    value?: number;
    description: string;
    statusColor: StatusIconColor;
}

export const LargeNumericInfo: React.FC<Props> = ({ statusColor, value, description }) => {
    return (
        <Box p={2} sx={{ display: "flex" }} minHeight={80}>
            <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }} mr={2}>
                <StatusIcon color={statusColor} />
            </Box>
            <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }} mr={2}>
                {value !== undefined ? (
                    <Typography variant={"h4"}>{value}</Typography>
                ) : (
                    <CircularProgress sx={{ color: "grey.500" }} size={25} />
                )}
            </Box>
            <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                <Typography>{description}</Typography>
            </Box>
        </Box>
    );
};
