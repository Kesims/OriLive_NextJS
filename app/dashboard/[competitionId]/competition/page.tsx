"use client";
import { useTranslation } from "react-i18next";
import { DashboardPage } from "@/components/dashboard/dashboardPage";
import React, { useContext } from "react";
import { Box, Card, MenuItem, Select, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";
import RemoveCompetitionDialog from "@/components/dashboard/competition/removeCompetitionDialog";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useUpdateCompetitionMutation } from "@/src/generated/graphql";
import { useSnackbar } from "notistack";
import dayjs from "dayjs";
import { UserContext } from "@/hooks/user/userContext";

export default function CompetitionSettings() {
    const { t } = useTranslation("dashboard", { keyPrefix: "competition" });
    const [dataChanged, setDataChanged] = React.useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const context = useContext(CompetitionContext);
    const [updateCompetition] = useUpdateCompetitionMutation();
    const { enqueueSnackbar } = useSnackbar();
    const userContext = useContext(UserContext);
    const handleSave = async () => {
        if (!context.competition) return;
        const { data } = await updateCompetition({
            variables: {
                competition: {
                    id: context.competition.id,
                    competitionId: context.competition.competitionId,
                    name: context.competition.name,
                    description: context.competition.description,
                    location: context.competition.location,
                    organizer: context.competition.organizer,
                    startTime: context.competition.startTime,
                    type: context.competition.type,
                    oresultsIntegration: context.competition.oresultsIntegration,
                },
            },
        });
        if (data?.updateCompetition) {
            setDataChanged(false);
            enqueueSnackbar(t("saveSuccess"), { variant: "success" });
        } else {
            enqueueSnackbar(t("saveError"), { variant: "error" });
        }
    };

    return (
        <DashboardPage pageHeading={t("title")}>
            <Grid2 container spacing={2} width={"100%"}>
                <Grid2 xs={12} md={8}>
                    <Card sx={{ p: 2, width: "100%" }} variant={"outlined"}>
                        <Typography fontWeight={"bolder"} fontSize={22}>
                            {t("settings")}
                        </Typography>
                        <Box sx={{ my: 2, mx: 1 }}>
                            <Typography fontWeight={"bolder"} fontSize={18}>
                                {t("competitionName")}
                            </Typography>
                            <TextField
                                fullWidth
                                value={context.competition?.name}
                                onChange={(event) => {
                                    context.setCompetition({
                                        description: undefined,
                                        id: 0,
                                        competitionId: 0,
                                        location: undefined,
                                        organizer: undefined,
                                        owner: undefined,
                                        startTime: undefined,
                                        type: "",
                                        ...context.competition,
                                        name: event.target.value,
                                    });
                                    setDataChanged(true);
                                }}
                            />
                        </Box>
                        <Box sx={{ my: 2, mx: 1 }}>
                            <Typography fontWeight={"bolder"} fontSize={18}>
                                {t("competitionDescription")}
                            </Typography>
                            <TextField
                                fullWidth
                                value={context.competition?.description}
                                onChange={(event) => {
                                    context.setCompetition({
                                        id: 0,
                                        competitionId: 0,
                                        location: undefined,
                                        organizer: undefined,
                                        owner: undefined,
                                        startTime: undefined,
                                        name: "",
                                        type: "",
                                        ...context.competition,
                                        description: event.target.value,
                                    });
                                    setDataChanged(true);
                                }}
                            />
                        </Box>
                        <Grid2 container sx={{ my: 2, mx: 0.15 }} spacing={2}>
                            <Grid2 xs={12} md={6}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("competitionLocation")}
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={context.competition?.location}
                                    onChange={(event) => {
                                        context.setCompetition({
                                            id: 0,
                                            competitionId: 0,
                                            description: undefined,
                                            organizer: undefined,
                                            owner: undefined,
                                            startTime: undefined,
                                            name: "",
                                            type: "",
                                            ...context.competition,
                                            location: event.target.value,
                                        });
                                        setDataChanged(true);
                                    }}
                                />
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("competitionOrganizer")}
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={context.competition?.organizer}
                                    onChange={(event) => {
                                        context.setCompetition({
                                            id: 0,
                                            competitionId: 0,
                                            description: undefined,
                                            location: undefined,
                                            owner: undefined,
                                            startTime: undefined,
                                            name: "",
                                            type: "",
                                            ...context.competition,
                                            organizer: event.target.value,
                                        });
                                        setDataChanged(true);
                                    }}
                                />
                            </Grid2>
                            <Grid2 xs={12} md={6} sx={{ my: 1 }}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("competitionDate")}
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        sx={{ width: "100%" }}
                                        value={
                                            context.competition?.startTime
                                                ? dayjs(context.competition.startTime)
                                                : null
                                        }
                                        disablePast
                                        onChange={(date) => {
                                            context.setCompetition({
                                                id: 0,
                                                competitionId: 0,
                                                description: undefined,
                                                location: undefined,
                                                organizer: undefined,
                                                owner: undefined,
                                                name: "",
                                                type: "",
                                                ...context.competition,
                                                startTime: date,
                                            });
                                            setDataChanged(true);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid2>
                            <Grid2 xs={12} md={6} sx={{ my: 1 }}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("competitionType")}
                                </Typography>
                                <Select
                                    fullWidth
                                    placeholder={t("selectCompetitionType")?.toString()}
                                    value={context.competition ? context.competition.type : "individual"}
                                    onChange={(event) => {
                                        context.setCompetition({
                                            id: 0,
                                            competitionId: 0,
                                            description: undefined,
                                            location: undefined,
                                            organizer: undefined,
                                            owner: undefined,
                                            startTime: undefined,
                                            name: "",
                                            ...context.competition,
                                            type: event.target.value,
                                        });
                                        setDataChanged(true);
                                    }}
                                >
                                    <MenuItem value={"individual"}>{t("individualCompetition")}</MenuItem>
                                    <MenuItem value={"relay"}>{t("relayCompetition")}</MenuItem>
                                </Select>
                            </Grid2>
                        </Grid2>
                        <Box sx={{ my: 2, width: "100%", display: "flex", justifyContent: "center" }}>
                            <Button
                                variant={"contained"}
                                disabled={!dataChanged}
                                onClick={() => {
                                    handleSave();
                                }}
                            >
                                {t("saveChanges")}
                            </Button>
                        </Box>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={4}>
                    <Card sx={{ p: 2, width: "100%" }} variant={"outlined"}>
                        <Typography fontWeight={"bolder"} fontSize={22}>
                            {t("competitionInformation")}
                        </Typography>
                        <Grid2 container width={"100%"} spacing={2} sx={{ my: 1 }}>
                            <Grid2 xs={8}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("competitionID")}
                                </Typography>
                                <Typography>{t("competitionIdInfo")}</Typography>
                            </Grid2>
                            <Grid2 xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Typography fontWeight={"bolder"} fontSize={26} textAlign={"center"}>
                                        {context.competition?.competitionId}
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2 xs={8}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("userToken")}
                                </Typography>
                                <Typography>{t("userTokenInfo")}</Typography>
                            </Grid2>
                            <Grid2 xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Typography fontWeight={"bolder"} fontSize={20} textAlign={"center"}>
                                        {userContext.user?.token}
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Card>
                    <Card sx={{ p: 2, width: "100%", mt: 2 }} variant={"outlined"}>
                        <Typography fontWeight={"bolder"} fontSize={22}>
                            {t("dangerZone")}
                        </Typography>
                        <Grid2 container width={"100%"} spacing={2} sx={{ my: 1 }}>
                            <Grid2 xs={8}>
                                <Typography fontWeight={"bolder"} fontSize={18}>
                                    {t("deleteCompetition")}
                                </Typography>
                                <Typography>{t("deleteCompetitionWarning")}</Typography>
                            </Grid2>
                            <Grid2 xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <RemoveCompetitionDialog
                                        competitionId={context.competition?.competitionId}
                                        open={deleteDialogOpen}
                                        setOpen={setDeleteDialogOpen}
                                    />
                                    <Button
                                        variant={"outlined"}
                                        color={"error"}
                                        fullWidth
                                        onClick={() => setDeleteDialogOpen(true)}
                                    >
                                        {t("delete")}
                                    </Button>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Card>
                </Grid2>
            </Grid2>
        </DashboardPage>
    );
}
