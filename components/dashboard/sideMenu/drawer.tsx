import React, { ReactNode } from "react";
import { CSSObject, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 270;

interface Props {
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export const Drawer: React.FC<Props> = ({ open, setOpen, children }) => {
    return (
        <MuiDrawer
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
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
            })}
        >
            {children}
        </MuiDrawer>
    );
};
