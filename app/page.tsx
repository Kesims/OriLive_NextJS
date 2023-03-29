"use client";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import { LoginForm } from "@/components/login/login";
import {
    Box,
    Card,
    Container,
    Link,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import ArrowRightRounded from "@mui/icons-material/ArrowRightRounded";
import { theme } from "@/src/utils/theme";
import List from "@mui/material/List";
import { EmailRounded, LinkedIn } from "@mui/icons-material";
export default function Home() {
    const oNodeList = [
        "Kompaktní, levná, lehká",
        "Výdrž baterie více než 13 hodin",
        "Node / WiFi Gateway",
        "Nastavení pomocí mobilní aplikace a Bluetooth",
        "ESP32, LoRa 169 MHz",
    ];

    return (
        <main>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Codystar&display=swap" rel="stylesheet" />

            <Grid2 container spacing={2} sx={{ height: "100vh", width: "100%" }}>
                <Grid2
                    xs={6}
                    p={10}
                    sx={{
                        maxWidth: "100%",
                        height: "90%",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={"/logo.png"} width={"65%"} />
                    </Box>
                </Grid2>
                <Grid2
                    xs={6}
                    p={10}
                    sx={{
                        maxWidth: "100%",
                        height: "90%",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Container maxWidth="xs">
                            <LoginForm />
                        </Container>
                    </Box>
                </Grid2>
                <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Container>
                        <Divider>
                            <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                                <Typography color={theme.palette.primary.main}>O PROJEKTU</Typography>
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
                    <Typography variant={"h4"} align={"center"} fontWeight={"bold"}>
                        CO JE PROJEKT ORILIVE?
                    </Typography>
                    <Typography variant={"body1"} align={"center"} marginTop={3} fontSize={"18px"}>
                        Jedná se o studentský projekt, který se zabývá konstrukcí sady zařízení pro bezdrátový
                        přenos výsledků v orientačních sportech. Při vývoji je kladen důraz na nízkou
                        pořizovací cenu zařízení, jednoduchost ovládání a nezávislost na sítích mobilních
                        operátorů.
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
                    <Grid2 xs={5} sx={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img src={"/o-node.png"} alt={"o-node"} width={"75%"} />
                        </Box>
                    </Grid2>
                    <Grid2 xs={7}>
                        <Container sx={{ paddingX: "50px" }} maxWidth={"md"}>
                            <Typography variant={"h4"} color={"white"} fontWeight={"bold"}>
                                Deska OriLive O-Node
                            </Typography>
                            <Typography variant={"body1"} color={"white"} marginY={6} fontSize={"18px"}>
                                Deska O-Node slouží ke sběru SRR dat ze zařízení SPORTident, která následně
                                pomocí technologie LoRa a vlastního OPRP protokolu odesílá na nejbližší
                                gateway jednotku.
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
            <Box p={6} sx={{ paddingY: "200px", display: "flex", justifyContent: "center" }}>
                <Grid2 container spacing={2} maxWidth={"lg"}>
                    <Grid2 xs={7} sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                        <Container maxWidth={"md"}>
                            <Typography variant={"h4"} fontWeight={"bold"}>
                                OPRP Protokol
                            </Typography>
                            <Typography variant={"body1"} marginTop={3} fontSize={"18px"}>
                                OPRP (OriLive Punch Routing Protocol) je jednoduchý protokol, speciálně
                                navržený pro potřeby projektu. Jednotkám umožňuje formovat meshovou síť, ve
                                které mohou data téct z jednotlivých nodů ke gateway jednotce přes více
                                přeskoků. Zároveň je navržený tak, aby byly rámce co nejmenší. To celému
                                systému umožnuje výborné pokrytí a zajišťuje dostatečnou propustnost sítě.
                            </Typography>
                        </Container>
                    </Grid2>
                    <Grid2 xs={5} sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img src={"/nodeSimplistic.png"} alt={"example network"} width={"40%"} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Box p={6} sx={{ paddingBottom: "150px", display: "flex", justifyContent: "center" }}>
                <Container>
                    <Typography
                        variant={"h3"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                        color={theme.palette.primary.main}
                        marginBottom={4}
                    >
                        JEDNODUCHOST
                    </Typography>
                    <Typography variant={"body1"} fontSize={"18px"} textAlign={"center"} marginBottom={10}>
                        Systém je navržený tak, aby vyžadoval pouze minimální přípravy před závodem a
                        nepředstavoval tak pro pořadatele zátěž.
                    </Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 xs={6}>
                            <Container sx={{ paddingX: "50px" }}>
                                <Typography
                                    variant={"h4"}
                                    fontWeight={"bold"}
                                    align={"center"}
                                    marginBottom={5}
                                >
                                    Mobilní aplikace
                                </Typography>

                                <img src={"/mobileShowcase.png"} alt={"mobile app showcase"} width={"100%"} />
                                <Typography
                                    variant={"body1"}
                                    marginTop={3}
                                    fontSize={"18px"}
                                    align={"center"}
                                >
                                    Mobilní aplikace dělá z nastavení jednotek otázku vteřin.
                                </Typography>
                            </Container>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Container sx={{ paddingX: "50px" }}>
                                <Typography
                                    variant={"h4"}
                                    fontWeight={"bold"}
                                    align={"center"}
                                    marginBottom={5}
                                >
                                    Webový dashboard
                                </Typography>

                                <img src={"/laptopShowcase.png"} alt={"dashboard"} width={"100%"} />
                                <Typography
                                    variant={"body1"}
                                    marginTop={3}
                                    fontSize={"18px"}
                                    align={"center"}
                                >
                                    Stav zařízení, tok dat a podobně lze sledovat v dashboardu.
                                </Typography>
                            </Container>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Box p={6} sx={{ paddingBottom: "170px", display: "flex", justifyContent: "center" }}>
                <Container maxWidth={"lg"}>
                    <Typography variant={"h4"} fontWeight={"bold"} marginBottom={4}>
                        Poděkování
                    </Typography>
                    <Typography variant={"body1"} fontSize={"18px"} maxWidth={"80%"}>
                        Chci poděkovat všem, kteří mi pomohli s vývojem tohoto projektu. V první řadě je to
                        RNDr. Jan Koupil, Ph.D., za vedení při tvorbě práce SOČ a Ing. Pavel Faltejsek, který
                        mě zasvětil do IT okolo pořádání závodů a dal mi hromadu cenných tipů. Dík patří také
                        [titul?] Karlu Koudelkovi, který mě naučil pracovat s moderními webovými technologiemi
                        a Mgr. Janu Juricovi, autorovi projektu{" "}
                        <Link href={"https://oresults.eu"}>OResults.eu</Link>, který také poskytl mnoho tipů a
                        je velmi otevřený spolupráci.
                    </Typography>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    paddingY: "50",
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
                            Kontakt
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
