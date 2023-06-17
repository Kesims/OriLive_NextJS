import React from "react";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

interface Props {
    formData: CompetitionFormInterface;
    setFormData: React.Dispatch<React.SetStateAction<CompetitionFormInterface>>;
}

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CompetitionFormInterface } from "@/components/dashboard/competition/createCompetitionForm/createCompetitionFormStepper";
import { useTranslation } from "react-i18next";
export default function AdditionalInfoStep({ formData, setFormData }: Props) {
    const { t } = useTranslation("dashboard", { keyPrefix: "createCompetition" });

    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, description: e.target.value });
    };

    const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, location: e.target.value });
    };

    const onOrganizerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, organizer: e.target.value });
    };

    const onEndDateChange = (newValue: Date | null) => {
        if (!newValue) return;
        setFormData({ ...formData, endDate: newValue });
    };

    return (
        <Box sx={{ paddingY: 4, paddingX: 3 }}>
            <Typography variant={"h4"}>{t("additionalInformationTitle")}</Typography>
            <Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionDescription")}
                    </Typography>
                    <TextField
                        id="outlined"
                        fullWidth
                        onChange={onDescriptionChange}
                        value={formData.description ? formData.description : undefined}
                    />
                </Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionLocation")}
                    </Typography>
                    <TextField
                        id="outlined"
                        fullWidth
                        onChange={onLocationChange}
                        value={formData.location ? formData.location : undefined}
                    />
                </Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("competitionOrganizer")}
                    </Typography>
                    <TextField
                        id="outlined"
                        fullWidth
                        onChange={onOrganizerChange}
                        value={formData.organizer ? formData.organizer : undefined}
                    />
                </Box>
                <Box sx={{ width: "60%", my: 2 }}>
                    <Typography sx={{ display: "block", fontSize: "1.2em" }}>
                        {t("expectedEndDate")}
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            onChange={(newDate: Date | null) => onEndDateChange(newDate)}
                            disablePast
                            value={formData.endDate ? formData.endDate : null}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
        </Box>
    );
}
