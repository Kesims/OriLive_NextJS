"use client"
import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link,
    Paper, TextField, Typography } from "@mui/material";

export default function Login() {
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Přihlášení
                </Typography>
                <Box component="form" onSubmit={/* TODO */ () => console.log("Not Implemented")} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Uživatelské jméno"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Heslo"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapamatovat si údaje"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Přihlásit se
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}