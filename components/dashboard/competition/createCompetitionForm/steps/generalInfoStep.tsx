import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { CompetitionFormInterface } from "@/components/dashboard/competition/createCompetitionForm/createCompetitionFormStepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTranslation } from "react-i18next";

interface Props {
    formData: CompetitionFormInterface;
    setFormData: React.Dispatch<React.SetStateAction<CompetitionFormInterface>>;
}

export default function GeneralInfoStep({ formData, setFormData }: Props) {
    const { t } = useTranslation("dashboard", { keyPrefix: "createCompetition" });

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const onStartDateChange = (newValue: Date | null) => {
        if (!newValue) return;
        setFormData({ ...formData, startDate: newValue });
    };

    const onTypeChange = (e: SelectChangeEvent<string>) => {
        setFormData({ ...formData, type: e.target.value });
    };

    return (
        <Box sx={{ paddingY: 4, paddingX: 3 }}>
            <Typography variant={"h4"}>{t("generalInformation")}</Typography>
            <Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionName")}
                    </Typography>
                    <TextField
                        helperText={t("competitionNameHelper")}
                        required
                        id="outlined-required"
                        fullWidth
                        onChange={onNameChange}
                        value={formData.name ? formData.name : ""}
                    />
                </Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionDate")}
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            onChange={(newValue: Date | null) => onStartDateChange(newValue)}
                            disablePast
                            value={formData.startDate ? formData.startDate : null}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionType")}
                    </Typography>
                    <Select
                        fullWidth
                        placeholder={t("selectCompetitionType")?.toString()}
                        onChange={onTypeChange}
                        value={formData.type ? formData.type : "individual"}
                    >
                        <MenuItem value={"individual"}>{t("individualCompetition")}</MenuItem>
                        <MenuItem value={"relay"}>{t("relayCompetition")}</MenuItem>
                    </Select>
                </Box>
            </Box>
        </Box>
    );
}
