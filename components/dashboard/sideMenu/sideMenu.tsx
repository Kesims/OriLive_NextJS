"use client";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { SideMenuItem } from "./sideMenuItem";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import DynamicFormOutlined from "@mui/icons-material/DynamicFormOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { Drawer } from "./drawer";
import { DrawerHeader } from "./drawerHeader";
import { urlConf } from "@/src/urlConf";
import { useHandleLogout } from "@/components/login/logoutHandler";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function SideMenu() {
    const [open, setOpen] = React.useState(false);
    const handleLogout = useHandleLogout();
    const theme = useTheme();

    const { t, i18n } = useTranslation("dashboard", { keyPrefix: "sideMenu" });

    return (
        <Box sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}>
            <Drawer open={open} setOpen={setOpen}>
                <DrawerHeader open={open} />
                <Divider />
                <List>
                    <SideMenuItem href={urlConf.dashboard.punches} open={open} text={t("punches")}>
                        <AvTimerOutlinedIcon sx={{ color: "black" }} />
                    </SideMenuItem>
                    <SideMenuItem href={urlConf.dashboard.nodes} open={open} text={t("devices")}>
                        <StorageRoundedIcon sx={{ color: "black" }} />
                    </SideMenuItem>
                    <SideMenuItem
                        href={urlConf.dashboard.networkCommands}
                        open={open}
                        text={t("networkCommands")}
                    >
                        <DynamicFormOutlined sx={{ color: "black" }} />
                    </SideMenuItem>
                    <SideMenuItem href={urlConf.dashboard.oresults} open={open} text={t("oresults")}>
                        <ShuffleRoundedIcon sx={{ color: "black" }} />
                    </SideMenuItem>
                </List>
                <Divider style={{ marginTop: "auto" }} />
                <List>
                    <SideMenuItem
                        open={open}
                        text={t("changeLanguage")}
                        onClick={() => {
                            changeLanguage(i18n.language === "cs" ? "en" : "cs");
                        }}
                    >
                        <LanguageIcon sx={{ color: "black" }} />
                    </SideMenuItem>
                    <SideMenuItem open={open} text={t("logout")} onClick={handleLogout}>
                        <LogoutRoundedIcon sx={{ color: "black" }} />
                    </SideMenuItem>
                </List>
            </Drawer>
        </Box>
    );
}
