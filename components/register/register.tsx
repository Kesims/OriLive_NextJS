import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRegister } from "@/components/register/register.hook";
import { RegisterFormData } from "@/components/register/register.types";

export function RegistrationForm() {
    const { registrationHandler } = useRegister();
    const { register, handleSubmit } = useForm<RegisterFormData>();
    const { t } = useTranslation("register");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h4" mb={1}>
                {t("title")}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(registrationHandler)} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label={t("username")}
                    autoFocus
                    {...register("username", {})}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label={t("password")}
                    type="password"
                    id="password"
                    {...register("password", {})}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label={t("repeatPassword")}
                    type="password"
                    id="repeatPassword"
                    {...register("repeatPassword", {})}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    {t("register")}
                </Button>
            </Box>
        </Box>
    );
}
