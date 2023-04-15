import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { StatusIcon } from "@/components/dashboard/info/parts/statusIcon";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";

interface Props {
    description?: string;
    statusColor: StatusIconColor;
}

export const TextInfo: React.FC<Props> = ({ statusColor, description }) => {
    return (
        <Box p={1} sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }} mr={2}>
                <StatusIcon color={statusColor} />
            </Box>
            <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                <Typography>{description !== undefined ? description : <Skeleton width={120} />}</Typography>
            </Box>
        </Box>
    );
};
