"use client";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { urlConf } from "@/src/urlConf";
import { Competition } from "@/src/generated/graphql";
import { useRouter } from "next/navigation";
import useCompetition from "@/hooks/competition/competition.hook";
import { useTranslation } from "react-i18next";

export default function DashboardWithoutIDPage() {
    const { competitions } = useCompetition();
    const router = useRouter();
    const { t } = useTranslation("dashboard", { keyPrefix: "competitionSelect" });

    return (
        <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexFlow: "column",
                    height: "90%",
                    width: "100%",
                }}
            >
                <Container maxWidth={"xl"}>
                    <Typography variant={"h4"} align={"center"} fontWeight={"bolder"} my={2}>
                        {t("title")}
                    </Typography>
                    <Typography variant={"h5"} align={"center"} fontWeight={"lighter"} my={2}>
                        {t("startBySelectingCompetition")}
                    </Typography>
                </Container>
                <Container maxWidth={"sm"}>
                    <Select
                        sx={{
                            width: "100%",
                        }}
                        onChange={(e) => {
                            router.push(`/dashboard/${e.target.value}`);
                        }}
                    >
                        {competitions?.map((competition: Competition) => (
                            <MenuItem key={competition.competitionId} value={competition.competitionId}>
                                {competition.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <Box sx={{ display: "flex", justifyContent: "center" }} py={3}>
                        <Button href={urlConf.dashboard.createCompetition} variant={"text"}>
                            {t("createNewCompetition")}
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
