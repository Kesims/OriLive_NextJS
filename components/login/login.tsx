import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/components/login/login.hook";
import type { LoginFormData } from "@/components/login/login.types";
import { useTranslation } from "react-i18next";

export function LoginForm() {
    const { loginHandler } = useLogin();
    const { register, handleSubmit } = useForm<LoginFormData>();
    const { t } = useTranslation("login");

    return (
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h4" mb={1}>
                {t("title")}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(loginHandler)} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label={t("username")}
                    autoComplete="username"
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
                    autoComplete="current-password"
                    {...register("password", {})}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label={t("rememberMe")}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    {t("login")}
                </Button>
            </Box>
        </Box>
    );
}
