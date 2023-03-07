"use client";
import React from "react";
import SideMenu from "@/components/dashboard/sideMenu/sideMenu";
import { Box } from "@material-ui/core";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: "flex" }}>
            <SideMenu />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
}
