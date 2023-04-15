"use client";
import React from "react";
import SideMenu from "@/components/dashboard/sideMenu/sideMenu";
import { Box, useTheme } from "@mui/material";
import BottomMenu from "@/components/dashboard/bottomMenu/bottomMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex" }}>
            <SideMenu />
            <BottomMenu />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 3,
                    mb: 0,
                    [theme.breakpoints.down("md")]: { padding: 1, mb: "65px" },
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
