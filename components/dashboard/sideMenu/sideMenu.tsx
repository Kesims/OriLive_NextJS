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
import { urlConf, withID } from "@/src/urlConf";
import { useHandleLogout } from "@/components/login/logoutHandler";
import { Box, MenuItem, Select, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import SideMenuGeneralItem from "@/components/dashboard/sideMenu/sideMenuGeneralItem";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TodayIcon from "@mui/icons-material/Today";
import { useContext } from "react";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";

export default function SideMenu() {
    const context = useContext(CompetitionContext);
    const [open, setOpen] = React.useState(false);
    const handleLogout = useHandleLogout();
    const theme = useTheme();

    const { t, i18n } = useTranslation("dashboard", { keyPrefix: "sideMenu" });

    return (
        <Box sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}>
            <Drawer open={open} setOpen={setOpen}>
                <DrawerHeader open={open} />
                <Divider />
                <SideMenuGeneralItem
                    icon={<EmojiEventsIcon sx={{ color: "black" }} />}
                    content={
                        <Select
                            sx={{
                                opacity: open ? 1 : 0,
                                width: "100%",
                            }}
                        >
                            <MenuItem value={"Z1"}>Závod 1</MenuItem>
                            <MenuItem value={"Z2"}>Závod 2</MenuItem>
                        </Select>
                    }
                    open={open}
                />
                <SideMenuGeneralItem
                    icon={<AddIcon sx={{ color: "black" }} />}
                    content={"Nový závod"}
                    href={withID(urlConf.dashboard.createCompetition, context.competition?.id)}
                    open={open}
                />
                <SideMenuItem open={open} text={t("competitions")} href={urlConf.dashboard.competition}>
                    <TodayIcon sx={{ color: "black" }} />
                </SideMenuItem>
                <Divider />
                {context.competition && (
                    <List>
                        <SideMenuItem
                            href={withID(urlConf.dashboard.punches, context.competition.id)}
                            open={open}
                            text={t("punches")}
                        >
                            <AvTimerOutlinedIcon sx={{ color: "black" }} />
                        </SideMenuItem>
                        <SideMenuItem
                            href={withID(urlConf.dashboard.nodes, context.competition.id)}
                            open={open}
                            text={t("devices")}
                        >
                            <StorageRoundedIcon sx={{ color: "black" }} />
                        </SideMenuItem>
                        <SideMenuItem
                            href={withID(urlConf.dashboard.networkCommands, context.competition?.id)}
                            open={open}
                            text={t("networkCommands")}
                        >
                            <DynamicFormOutlined sx={{ color: "black" }} />
                        </SideMenuItem>
                        <SideMenuItem
                            href={withID(urlConf.dashboard.oresults, context.competition.id)}
                            open={open}
                            text={t("oresults")}
                        >
                            <ShuffleRoundedIcon sx={{ color: "black" }} />
                        </SideMenuItem>
                    </List>
                )}
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
