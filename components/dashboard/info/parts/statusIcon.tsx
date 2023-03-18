import React from "react";
import { StatusIconColor } from "@/components/dashboard/info/parts/statusIcon.types";
import CircleIcon from "@mui/icons-material/Circle";

interface Props {
    color: StatusIconColor;
}

export const StatusIcon: React.FC<Props> = ({ color }) => {
    let cValue = "gray";
    if (color == StatusIconColor.green) cValue = "#7CDF7C";
    if (color == StatusIconColor.red) cValue = "#E75858";

    return <CircleIcon sx={{ color: cValue }} fontSize="small" />;
};
