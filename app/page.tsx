"use client";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import { LoginForm } from "@/components/login/login";
import {
    Box,
    Container,
    Link,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import ArrowRightRounded from "@mui/icons-material/ArrowRightRounded";
import List from "@mui/material/List";
import { EmailRounded, LinkedIn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { changeLanguage } from "i18next";
import ChangeLanguageButton from "@/components/changeLanguageButton/changeLanguageButton";

export default function Home() {
    const theme = useTheme();

    const { t } = useTranslation("landingPage");

    const oNodeList = [
        t("onodeBoardFeatures.compact"),
        t("onodeBoardFeatures.batteryLife"),
        t("onodeBoardFeatures.operatingMode"),
        t("onodeBoardFeatures.easySetup"),
        t("onodeBoardFeatures.technical"),
    ];

    return (
        <main>
            <ChangeLanguageButton />
            <Grid2 container sx={{ [theme.breakpoints.up("md")]: { height: "100vh" }, width: "100%" }}>
                <Grid2
                    sm={12}
                    md={6}
                    p={4}
                    sx={{
                        maxWidth: "100%",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={"/logo.png"}
                            width={theme.breakpoints.up("md") ? "55%" : "70%"}
                            loading={"lazy"}
                            decoding={"async"}
                        />
                    </Box>
                </Grid2>
                <Grid2
                    sm={12}
                    md={6}
                    p={4}
                    sx={{
                        maxWidth: "100%",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        [theme.breakpoints.up("md")]: { height: "90%" },
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "80px" }}>
                        <Container maxWidth="xs">
                            <LoginForm />
                        </Container>
                    </Box>
                </Grid2>
                <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Container>
                        <Divider>
                            <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                                <Typography
                                    color={theme.palette.primary.main}
                                    sx={{ textTransform: "uppercase" }}
                                >
                                    {t("about")}
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <ExpandMoreRounded sx={{ color: "grey" }} />
                                </Box>
                            </Box>
                        </Divider>
                    </Container>
                </Grid2>
            </Grid2>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Container maxWidth={"md"} sx={{ paddingTop: "150px", paddingBottom: "200px" }}>
                    <Typography
                        variant={"h4"}
                        align={"center"}
                        fontWeight={"bold"}
                        maxWidth={"100%"}
                        sx={{ textTransform: "uppercase" }}
                    >
                        {t("whatIsOrilive")}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} marginTop={3} fontSize={"18px"}>
                        {t("whatIsOriliveText")}
                    </Typography>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    paddingY: "65px",
                }}
                p={3}
            >
                <Grid2 container spacing={3}>
                    <Grid2
                        sm={12}
                        md={5}
                        sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img
                                src={"/o-node.webp"}
                                alt={"o-node"}
                                width={"75%"}
                                loading={"lazy"}
                                decoding={"async"}
                            />
                        </Box>
                    </Grid2>
                    <Grid2
                        sm={12}
                        md={7}
                        sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}
                    >
                        <Container maxWidth={"md"}>
                            <Typography variant={"h4"} color={"white"} fontWeight={"bold"} marginTop={5}>
                                {t("onodeBoard")}
                            </Typography>
                            <Typography variant={"body1"} color={"white"} marginY={6} fontSize={"18px"}>
                                {t("onodeBoardText")}
                            </Typography>
                            <List>
                                {oNodeList.map((item, key) => {
                                    return (
                                        <ListItem key={key}>
                                            <ListItemIcon>
                                                <ArrowRightRounded
                                                    sx={{ color: "white" }}
                                                    fontSize={"large"}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"body1"}
                                                        color={"white"}
                                                        fontSize={"18px"}
                                                    >
                                                        {item}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Container>
                    </Grid2>
                </Grid2>
            </Box>
            <Box p={3} sx={{ paddingY: "200px", display: "flex", justifyContent: "center" }}>
                <Grid2 container spacing={2} maxWidth={"lg"}>
                    <Grid2
                        sm={12}
                        md={7}
                        sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}
                    >
                        <Container maxWidth={"md"}>
                            <Typography variant={"h4"} fontWeight={"bold"}>
                                {t("oprpProtocol")}
                            </Typography>
                            <Typography variant={"body1"} marginTop={3} fontSize={"18px"} marginBottom={8}>
                                {t("oprpProtocolText")}
                            </Typography>
                        </Container>
                    </Grid2>
                    <Grid2
                        sm={12}
                        md={5}
                        sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img
                                src={"/nodeSimplistic.webp"}
                                alt={"example network"}
                                width={"40%"}
                                loading={"lazy"}
                                decoding={"async"}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Box p={4} sx={{ paddingBottom: "150px", display: "flex", justifyContent: "center" }}>
                <Container>
                    <Typography
                        variant={"h3"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                        color={theme.palette.primary.main}
                        marginBottom={4}
                        sx={{ [theme.breakpoints.down("md")]: { fontSize: "2rem" } }}
                        textTransform={"uppercase"}
                    >
                        {t("simplicity")}
                    </Typography>
                    <Typography variant={"body1"} fontSize={"18px"} textAlign={"center"} marginBottom={10}>
                        {t("simplicityText")}
                    </Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 sm={12} md={6}>
                            <Container>
                                <Typography
                                    variant={"h4"}
                                    fontWeight={"bold"}
                                    align={"center"}
                                    marginBottom={5}
                                >
                                    {t("mobileApp")}
                                </Typography>

                                <img
                                    src={"/mobileShowcase.webp"}
                                    alt={"mobile app showcase"}
                                    width={"100%"}
                                    loading={"lazy"}
                                    decoding={"async"}
                                />
                                <Typography
                                    variant={"body1"}
                                    marginTop={3}
                                    fontSize={"18px"}
                                    align={"center"}
                                >
                                    {t("mobileAppText")}
                                </Typography>
                            </Container>
                        </Grid2>
                        <Grid2 sm={12} md={6}>
                            <Container>
                                <Typography
                                    variant={"h4"}
                                    fontWeight={"bold"}
                                    align={"center"}
                                    marginBottom={5}
                                >
                                    {t("webDashboard")}
                                </Typography>

                                <img
                                    src={"/laptopShowcase.webp"}
                                    alt={"dashboard"}
                                    width={"100%"}
                                    loading={"lazy"}
                                    decoding={"async"}
                                />
                                <Typography
                                    variant={"body1"}
                                    marginTop={3}
                                    fontSize={"18px"}
                                    align={"center"}
                                >
                                    {t("webDashboardText")}
                                </Typography>
                            </Container>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Box p={3} sx={{ paddingBottom: "180px", display: "flex", justifyContent: "center" }}>
                <Container maxWidth={"lg"}>
                    <Typography variant={"h4"} fontWeight={"bold"} marginBottom={4}>
                        {t("acknowledgements")}
                    </Typography>
                    <Typography variant={"body1"} fontSize={"18px"}>
                        {t("acknowledgementsText1")}
                        <Link href={"https://oresults.eu"}>OResults.eu</Link>
                        {t("acknowledgementsText2")}
                    </Typography>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    paddingY: "50px",
                }}
                p={3}
            >
                <Box>
                    <Container maxWidth={"md"}>
                        <Typography
                            variant={"h4"}
                            fontWeight={"bold"}
                            color={"white"}
                            align={"center"}
                            marginBottom={3}
                        >
                            {t("contact")}
                        </Typography>
                        <List sx={{ color: "white" }}>
                            <ListItem button key="Email" component="a" href="mailto:neumma@delta-studenti.cz">
                                <ListItemIcon>
                                    <EmailRounded sx={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary="neumma@delta-studenti.cz" />
                            </ListItem>
                            <ListItem button component="a" href="https://www.linkedin.com/in/matej-neumann/">
                                <ListItemIcon>
                                    <LinkedIn sx={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary="matej-neumannn" />
                            </ListItem>
                        </List>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.primary.main }}>
                <Divider variant={"middle"} sx={{ backgroundColor: "white" }} />
                <Typography color={"white"} p={3} align={"center"}>
                    Matěj Neumann | OriLive © 2023
                </Typography>
            </Box>
        </main>
    );
}
