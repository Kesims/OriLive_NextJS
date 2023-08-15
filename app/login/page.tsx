"use client";

import { LoginForm } from "@/components/login/login";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { urlConf } from "@/src/urlConf";
import { useTranslation } from "react-i18next";
import React from "react";
import ChangeLanguageButton from "@/components/changeLanguageButton/changeLanguageButton";

export default function Login() {
    const { t } = useTranslation("login");

    return (
        <Box>
            <ChangeLanguageButton />
            <Container component="main" maxWidth="xs">
                <LoginForm />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        href={urlConf.homepage}
                        variant="text"
                        sx={{ textTransform: "none", mt: 4, textAlign: "center" }}
                    >
                        {t("backToLandingPage").toUpperCase()}{" "}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
