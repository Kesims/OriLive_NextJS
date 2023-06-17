import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useAddCompetition from "@/hooks/competition/addCompetition.hook";
import GeneralInfoStep from "@/components/dashboard/competition/createCompetitionForm/steps/generalInfoStep";
import AdditionalInfoStep from "@/components/dashboard/competition/createCompetitionForm/steps/additionalInfoStep";
import { AddCompetitionData } from "@/hooks/competition/competition.types";
import { useTranslation } from "react-i18next";

export interface CompetitionFormInterface {
    name: string | undefined;
    startDate: Date | undefined;
    type: string | undefined;
    endDate: Date | undefined;
    description: string | undefined;
    location: string | undefined;
    organizer: string | undefined;
}

export default function CreateCompetitionFormStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [requiredFailing, setRequiredFailing] = useState(false);
    const [formData, setFormData] = useState<CompetitionFormInterface>({
        type: "individual",
    } as CompetitionFormInterface);

    const { t } = useTranslation("dashboard", { keyPrefix: "createCompetition" });

    const { addCompetition } = useAddCompetition();

    const steps = [
        {
            label: t("baseInformation"),
            component: <GeneralInfoStep formData={formData} setFormData={setFormData} />,
        },
        {
            label: t("additionalInformation"),
            component: <AdditionalInfoStep formData={formData} setFormData={setFormData} />,
        },
    ];

    const isStepRequired = (step: number) => {
        return step === 0;
    };

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        // validate required values
        if (!formData.name || formData.name.length < 1 || !formData.startDate || !formData.type) {
            setRequiredFailing(true);
        } else {
            setRequiredFailing(false);
        }

        // check for submit
        if (activeStep === steps.length - 1) {
            handleSubmit();
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        // restore form data to default
        setFormData({
            type: "individual",
        } as CompetitionFormInterface);
        setActiveStep(0);
    };

    const handleSubmit = async () => {
        // Validate form data and submit if applicable
        if (!formData.name || formData.name.length < 1 || !formData.startDate || !formData.type) {
            setRequiredFailing(true);
            return;
        }
        const data: AddCompetitionData = {
            name: formData.name,
            startTime: formData.startDate,
            endTime: formData.endDate,
            type: formData.type,
            description: formData.description,
            location: formData.location,
            organizer: formData.organizer,
        } as AddCompetitionData;
        await addCompetition(data);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                        error?: boolean;
                    } = {};
                    labelProps.error = false;
                    labelProps.optional = null;
                    if (isStepRequired(index) && requiredFailing) {
                        stepProps.completed = false;
                        labelProps.optional = (
                            <Typography variant="caption" color="error">
                                {t("someInformationMissing")}
                            </Typography>
                        );
                        labelProps.error = true;
                    }
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">{t("optional")}</Typography>;
                    }
                    return (
                        <Step key={step.label} {...stepProps}>
                            <StepLabel {...labelProps}>{step.label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>{t("createdSuccessfully")}</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>{t("createAnother")}</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {steps[activeStep].component}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            {t("backButtonText")}
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? t("createCompetition") : t("next")}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
