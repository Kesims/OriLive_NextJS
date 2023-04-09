import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React, { useState } from "react";
import { urlConf } from "@/src/urlConf";
import HouseRounded from "@mui/icons-material/HouseRounded";
import DynamicFormOutlined from "@mui/icons-material/DynamicFormOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useHandleLogout } from "@/components/login/logoutHandler";
import Divider from "@mui/material/Divider";
import { Box, useTheme } from "@mui/material";

export default function BottomMenu() {
    const [value, setValue] = useState("overview");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleLogout = useHandleLogout();
    const theme = useTheme();

    return (
        <Box sx={{ [theme.breakpoints.up("md")]: { display: "none" } }}>
            <BottomNavigation
                sx={{
                    height: "56px",
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                    overflowX: "scroll",
                    backgroundColor: "white",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "space-between",
                }}
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Přehled"
                    value="overview"
                    icon={<HouseRounded />}
                    href={urlConf.dashboard.overview}
                />
                <BottomNavigationAction
                    label="Ražení"
                    value="punches"
                    icon={<AvTimerOutlinedIcon />}
                    href={urlConf.dashboard.punches}
                />
                <BottomNavigationAction
                    label="Zařízení"
                    value="nodes"
                    icon={<StorageRoundedIcon />}
                    href={urlConf.dashboard.nodes}
                />{" "}
                <BottomNavigationAction
                    label="Příkazy"
                    value="networkCommands"
                    icon={<DynamicFormOutlined />}
                    href={urlConf.dashboard.networkCommands}
                />{" "}
                <BottomNavigationAction
                    label="OResults"
                    value="oresults"
                    icon={<ShuffleRoundedIcon />}
                    href={urlConf.dashboard.oresults}
                />{" "}
                <Divider variant={"middle"} orientation={"vertical"} />
                <BottomNavigationAction
                    label="Odhlásit"
                    value="logout"
                    icon={<LogoutRoundedIcon />}
                    onClick={handleLogout}
                />{" "}
            </BottomNavigation>
        </Box>
    );
}
