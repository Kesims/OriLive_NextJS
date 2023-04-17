"use client";
import React from "react";
import SideMenu from "@/components/dashboard/sideMenu/sideMenu";
import { Box, Tooltip, useTheme } from "@mui/material";
import BottomMenu from "@/components/dashboard/bottomMenu/bottomMenu";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();

    const { t, i18n } = useTranslation("landingPage");
    const changeLanguageHandler = () => {
        changeLanguage(i18n.language === "cs" ? "en" : "cs");
    };

    return (
        <Box sx={{ display: "flex" }}>
            <SideMenu />
            <BottomMenu />
            <Box sx={{ position: "fixed", right: 0, top: 0, margin: 0 }}>
                <Tooltip title={t("changeLanguage")} placement={"left"}>
                    <Button onClick={changeLanguageHandler} sx={{ backgroundColor: "white" }}>
                        {i18n.language === "cs" ? "en" : "cs"}
                    </Button>
                </Tooltip>
            </Box>
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
