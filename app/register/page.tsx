"use client";

import { Box, Container, Typography } from "@mui/material";
import { RegistrationForm } from "@/components/register/register";
import Button from "@mui/material/Button";
import { urlConf } from "@/src/urlConf";
import { useTranslation } from "react-i18next";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import ChangeLanguageButton from "@/components/changeLanguageButton/changeLanguageButton";

export default function Login() {
    const { t } = useTranslation("register");

    return (
        <Box>
            <ChangeLanguageButton />
            <Grid2 container sx={{ p: 2 }}>
                <Grid2 xs={12} md={6}>
                    <Box
                        sx={{ display: "flex", justifyContent: "center", flexFlow: "column", height: "95%" }}
                    >
                        <Container component="main" maxWidth="sm">
                            <Typography variant={"h5"} fontWeight={"bold"}>
                                {t("text.title")}
                            </Typography>
                            <Typography variant={"body1"}>{t("text.body")}</Typography>
                        </Container>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={6} height={"90vh"}>
                    <Box
                        sx={{ display: "flex", justifyContent: "center", flexFlow: "column", height: "95%" }}
                    >
                        <Container component="main" maxWidth="xs">
                            <RegistrationForm />
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
                </Grid2>
            </Grid2>
        </Box>
    );
}
