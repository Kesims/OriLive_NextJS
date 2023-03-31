"use client";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { SideMenuItem } from "./sideMenuItem";
import { useLogutMutationMutation } from "@/src/generated/graphql";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { deleteCookie } from "cookies-next";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import DynamicFormOutlined from "@mui/icons-material/DynamicFormOutlined";
import { Drawer } from "./drawer";
import { DrawerHeader } from "./drawerHeader";
import { urlConf } from "@/src/urlConf";
import { useHandleLogout } from "@/components/login/logoutHandler";

export default function SideMenu() {
    const [open, setOpen] = React.useState(false);
    const handleLogout = useHandleLogout();

    return (
        <Drawer open={open} setOpen={setOpen}>
            <DrawerHeader open={open} />
            <Divider />
            <List>
                <SideMenuItem href={urlConf.dashboard.punches} open={open} text={"Zaznamenané ražení"}>
                    <AvTimerOutlinedIcon sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={urlConf.dashboard.nodes} open={open} text={"Zařízení"}>
                    <StorageRoundedIcon sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={urlConf.dashboard.networkCommands} open={open} text={"Síťové příkazy"}>
                    <DynamicFormOutlined sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={urlConf.dashboard.oresults} open={open} text={"Propojení OResults"}>
                    <ShuffleRoundedIcon sx={{ color: "black" }} />
                </SideMenuItem>
            </List>
            <Divider style={{ marginTop: "auto" }} />
            <List>
                <SideMenuItem open={open} text={"Odhlásit se"} onClick={handleLogout}>
                    <LogoutRoundedIcon sx={{ color: "black" }} />
                </SideMenuItem>
            </List>
        </Drawer>
    );
}
