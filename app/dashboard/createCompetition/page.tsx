"use client";
import CreateCompetitionFormStepper from "@/components/dashboard/competition/createCompetitionForm/createCompetitionFormStepper";
import { Box, Card, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function CreateCompetition() {
    const { t } = useTranslation("dashboard", { keyPrefix: "createCompetition" });

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
                    <Card sx={{ padding: 6 }} variant={"outlined"}>
                        <CreateCompetitionFormStepper />
                    </Card>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            my: 3,
                        }}
                    >
                        <Button variant={"text"}>{t("backToSelection")}</Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
