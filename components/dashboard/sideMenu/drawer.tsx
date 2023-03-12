import React, { ReactNode } from "react";
import { CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { theme } from "@/src/utils/theme";

const drawerWidth = 270;

interface Props {
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const openedMixin = (): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (): CSSObject => ({
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
            sx={{
                flexShrink: 0,
                justifyContent: "space-around",
                whiteSpace: "nowrap",
                boxSizing: "border-box",
                ...(open && {
                    ...openedMixin(),
                    "& .MuiDrawer-paper": openedMixin(),
                }),
                ...(!open && {
                    ...closedMixin(),
                    "& .MuiDrawer-paper": closedMixin(),
                }),
            }}
        >
            {children}
        </MuiDrawer>
    );
};
