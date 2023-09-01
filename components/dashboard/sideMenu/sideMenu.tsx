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
import { Box, MenuItem, Select, Tooltip, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import SideMenuGeneralItem from "@/components/dashboard/sideMenu/sideMenuGeneralItem";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TodayIcon from "@mui/icons-material/Today";
import { useContext } from "react";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";
import useCompetition from "@/hooks/competition/competition.hook";
import { useRouter } from "next/navigation";
import { PersonOutline } from "@mui/icons-material";
import useUserContext from "@/hooks/user/userContext.hook";
import useUsernameToken from "@/hooks/user/usernameToken.hook";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

interface Props {
    hideMain: boolean;
    setHideMain: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideMenu({ hideMain, setHideMain }: Props) {
    const context = useContext(CompetitionContext);
    const [open, setOpen] = React.useState(false);
    const handleLogout = useHandleLogout();
    const theme = useTheme();
    const { t, i18n } = useTranslation("dashboard", { keyPrefix: "sideMenu" });
    const { competitions } = useCompetition();
    const router = useRouter();
    useUserContext();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const usernameToken = useUsernameToken();

    const onMobileOpen = () => {
        setMobileOpen(!mobileOpen);
        setHideMain(!hideMain);
        setOpen(!open);
    };

    return (
        <Box sx={{ position: "relative" }}>
            <Button
                onClick={onMobileOpen}
                sx={{
                    [theme.breakpoints.up("md")]: {
                        display: "none",
                    },
                    position: "fixed",
                    top: 10,
                    left: 0,
                    zIndex: 1000,
                    backgroundColor: "white",
                }}
            >
                <MenuRoundedIcon />
            </Button>
            <Box
                sx={{
                    [theme.breakpoints.down("md")]: { display: mobileOpen ? "block" : "none" },
                    maxHeight: "100vh",
                }}
            >
                <Drawer open={open} setOpen={setOpen} mobileOpen={mobileOpen}>
                    <Button
                        onClick={onMobileOpen}
                        sx={{
                            [theme.breakpoints.up("md")]: { display: "none" },
                        }}
                    >
                        <MenuRoundedIcon />
                    </Button>
                    <DrawerHeader open={open} /> <Divider />
                    <SideMenuGeneralItem
                        icon={<EmojiEventsIcon sx={{ color: "black" }} />}
                        content={
                            <Select
                                sx={{
                                    opacity: open ? 1 : 0,
                                    width: "100%",
                                }}
                                value={context.competition ? context.competition.competitionId : -1}
                                onChange={(e) => {
                                    const id = e.target.value;
                                    router.push(withID(urlConf.dashboard.overview, Number(id)));
                                }}
                            >
                                {competitions?.map((competition, n) => (
                                    <MenuItem value={competition.competitionId} key={n}>
                                        {competition.name}
                                    </MenuItem>
                                ))}
                                <MenuItem value={-1} disabled={true} />
                            </Select>
                        }
                        open={open}
                    />
                    {/*<SideMenuItem*/}
                    {/*    open={open}*/}
                    {/*    text={t("competitions")}*/}
                    {/*    href={withID(urlConf.dashboard.competitions)}*/}
                    {/*>*/}
                    {/*    <ReceiptLongIcon sx={{ color: "black" }} />*/}
                    {/*</SideMenuItem>*/}
                    <SideMenuGeneralItem
                        icon={<AddIcon sx={{ color: "black" }} />}
                        content={t("createNewCompetition")}
                        href={withID(urlConf.dashboard.createCompetition, context.competition?.id)}
                        open={open}
                    />
                    <Divider sx={{ marginTop: 1 }} />
                    {context.competition && (
                        <List>
                            <SideMenuItem
                                open={open}
                                text={t("thisCompetition")}
                                href={withID(
                                    urlConf.dashboard.competition,
                                    context.competition.competitionId,
                                )}
                            >
                                <TodayIcon sx={{ color: "black" }} />
                            </SideMenuItem>
                            <SideMenuItem
                                href={withID(urlConf.dashboard.punches, context.competition.competitionId)}
                                open={open}
                                text={t("punches")}
                            >
                                <AvTimerOutlinedIcon sx={{ color: "black" }} />
                            </SideMenuItem>
                            <SideMenuItem
                                href={withID(urlConf.dashboard.nodes, context.competition.competitionId)}
                                open={open}
                                text={t("devices")}
                            >
                                <StorageRoundedIcon sx={{ color: "black" }} />
                            </SideMenuItem>
                            <SideMenuItem
                                href={withID(
                                    urlConf.dashboard.networkCommands,
                                    context.competition?.competitionId,
                                )}
                                open={open}
                                text={t("networkCommands")}
                            >
                                <DynamicFormOutlined sx={{ color: "black" }} />
                            </SideMenuItem>
                            <SideMenuItem
                                href={withID(urlConf.dashboard.oresults, context.competition.competitionId)}
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
                        <Tooltip title={t("tokenCopyTooltip")} placement={"right"} followCursor={true}>
                            <Box
                                onMouseEnter={usernameToken.onMouseEnter}
                                onMouseLeave={usernameToken.onMouseLeave}
                                onClick={usernameToken.onClick}
                            >
                                <SideMenuGeneralItem
                                    icon={<PersonOutline sx={{ color: "black" }} />}
                                    content={usernameToken?.text}
                                    open={open}
                                />
                            </Box>
                        </Tooltip>
                        <SideMenuItem open={open} text={t("logout")} onClick={handleLogout}>
                            <LogoutRoundedIcon sx={{ color: "black" }} />
                        </SideMenuItem>
                    </List>
                </Drawer>
            </Box>
        </Box>
    );
}
