import React, { ReactNode } from "react";
import { CSSObject, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 270;

interface Props {
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mobileOpen: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
    width: "100vw",
    [theme.breakpoints.up("md")]: { width: drawerWidth },
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

export const Drawer: React.FC<Props> = ({ open, setOpen, children, mobileOpen }) => {
    return (
        <MuiDrawer
            onMouseEnter={() => (!mobileOpen ? setOpen(true) : null)}
            onMouseLeave={() => (!mobileOpen ? setOpen(false) : null)}
            variant={"permanent"}
            sx={(theme) => ({
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
                [theme.breakpoints.down("md")]: { paddingTop: "35px" },
            })}
        >
            {children}
        </MuiDrawer>
    );
};
