"use client";
import { Box, Card, Typography } from "@mui/material";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import { useTranslation } from "react-i18next";
import Grid2 from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import Button from "@mui/material/Button";
import useCompetition from "@/hooks/competition/competition.hook";
import { Competition } from "@/src/generated/graphql";
import { urlConf, withID } from "@/src/urlConf";

export default function CompetitionPage() {
    const { t } = useTranslation("dashboard", { keyPrefix: "competitions" });

    const { competitions } = useCompetition();
    const upcomingCompetitions = competitions?.filter(
        (competition) => new Date(competition.startTime) > new Date(),
    );
    const archivedCompetitions = competitions?.filter(
        (competition) => new Date(competition.startTime) < new Date(),
    );

    const getCompetitionCards = (competitions: Competition[] | undefined) => {
        {
            return competitions?.map((competition, key) => {
                return (
                    <Grid2 xs={12} md={4} key={key}>
                        <Card sx={{ width: "100%" }} variant={"outlined"}>
                            <Grid2 container sx={{ p: 2 }}>
                                <Grid2 xs={12}>
                                    <Typography
                                        fontSize={20}
                                        fontWeight={"bolder"}
                                        sx={{ textTransform: "uppercase" }}
                                    >
                                        {competition.name}
                                    </Typography>
                                </Grid2>
                                <Grid2 xs={12}>
                                    <Box sx={{ display: "flex" }}>
                                        <CalendarMonthIcon sx={{ mr: 1 }} />
                                        <Typography fontSize={18}>
                                            {new Date(competition.startTime).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <AltRouteIcon sx={{ mr: 1 }} />
                                        <Typography fontSize={18}>
                                            {competition.type == "individual"
                                                ? t("individualCompetition")
                                                : t("relayCompetition")}
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 xs={12}>
                                    <Button
                                        variant={"outlined"}
                                        fullWidth={true}
                                        href={withID(urlConf.dashboard.overview, competition.competitionId)}
                                    >
                                        {t("viewCompetition")}
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Card>
                    </Grid2>
                );
            });
        }
    };

    return (
        <DashboardPage pageHeading={t("title")}>
            <Box sx={{ width: "100%", p: 2 }}>
                <Typography fontSize={28} fontWeight={"bolder"} px={2}>
                    {t("upcomingCompetitions")}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Grid2 container width={"100%"}>
                        {upcomingCompetitions && upcomingCompetitions.length > 0 ? (
                            getCompetitionCards(upcomingCompetitions)
                        ) : (
                            <Typography textAlign={"center"} fontSize={18} width={"100%"} p={3}>
                                {t("noUpcomingCompetitions")}
                            </Typography>
                        )}
                    </Grid2>
                </Box>
                <Typography fontSize={28} fontWeight={"bolder"} px={2} pt={2}>
                    {t("archivedCompetitions")}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Grid2 container width={"100%"}>
                        {archivedCompetitions && archivedCompetitions.length > 0 ? (
                            getCompetitionCards(archivedCompetitions)
                        ) : (
                            <Typography textAlign={"center"} fontSize={18} width={"100%"} p={3}>
                                {t("noArchivedCompetitions")}
                            </Typography>
                        )}
                    </Grid2>
                </Box>
            </Box>
        </DashboardPage>
    );
}
