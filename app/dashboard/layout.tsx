"use client";
import React from "react";
import SideMenu from "@/components/dashboard/sideMenu/sideMenu";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import BottomMenu from "@/components/dashboard/bottomMenu/bottomMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    const notMobile = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box sx={{ display: "flex" }}>
            {notMobile ? <SideMenu /> : <BottomMenu />}
            <Box component="main" sx={{ flexGrow: 1 }} p={notMobile ? 3 : 1} mb={notMobile ? 0 : "65px"}>
                {children}
            </Box>
        </Box>
    );
}
