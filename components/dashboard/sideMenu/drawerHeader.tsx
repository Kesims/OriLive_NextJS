import React from "react";
import { theme } from "@/src/utils/theme";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { urlConf } from "@/src/urlConf";

interface Props {
    open: boolean;
}

export const DrawerHeader: React.FC<Props> = ({ open }) => {
    return (
        <Link
            href={urlConf.dashboard.overview}
            sx={{
                display: "flex",
                alignItems: "center",
                padding: theme.spacing(1, 1),
            }}
        >
            <IconButton>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={open ? "/logo.png" : "/logoSmall.png"} height={35} alt={"OriLive logo"} />
            </IconButton>
        </Link>
    );
};
