"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import { SideMenuItem } from "./sideMenuItem";
import { useLogutMutationMutation } from "@/src/generated/graphql";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { deleteCookie } from "cookies-next";
import { useApolloClient } from "@apollo/client";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import { DynamicFormOutlined } from "@mui/icons-material";
const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 1),
    // // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    justifyContent: "space-around",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SideMenu() {
    const [open, setOpen] = React.useState(false);
    const [logout] = useLogutMutationMutation();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const client = useApolloClient();
    const handleLogout = async () => {
        try {
            await logout();
            await client.resetStore();
            deleteCookie("connect.sid", { path: "/" });
            router.push("/");
        } catch (e) {
            enqueueSnackbar("Odhlášení se nezdařilo!", { variant: "error" });
        }
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
            onMouseEnter={handleDrawerOpen}
            onMouseLeave={handleDrawerClose}
        >
            <DrawerHeader>
                <Link href={"/dashboard"}>
                    <IconButton onClick={handleDrawerClose}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={open ? "/logo.png" : "/logoSmall.png"} height={35} alt={"OriLive logo"} />
                    </IconButton>
                </Link>
            </DrawerHeader>
            <Divider />
            <List>
                <SideMenuItem href={"/dashboard/punches"} open={open} text={"Zaznamenané ražení"}>
                    <AvTimerOutlinedIcon sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={"/dashboard/nodes"} open={open} text={"Zařízení"}>
                    <StorageRoundedIcon sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={"/dashboard/networkCommands"} open={open} text={"Síťové příkazy"}>
                    <DynamicFormOutlined sx={{ color: "black" }} />
                </SideMenuItem>
                <SideMenuItem href={"/dashboard/oresults"} open={open} text={"Propojení OResults"}>
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
