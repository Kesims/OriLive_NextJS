"use client";
import React, { useState } from "react";
import SideMenu from "@/components/dashboard/sideMenu/sideMenu";
import { Box, useTheme } from "@mui/material";
// import BottomMenu from "@/components/dashboard/bottomMenu/bottomMenu";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";
import { Competition, User } from "@/src/generated/graphql";
import { UserContext } from "@/hooks/user/userContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    const [competition, setCompetition] = useState<Competition | undefined>(undefined);
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <Box>
            <UserContext.Provider value={{ user, setUser }}>
                <CompetitionContext.Provider value={{ competition, setCompetition }}>
                    <Box
                        sx={{
                            display: "flex",
                            [theme.breakpoints.down("md")]: { marginTop: "40px" },
                        }}
                    >
                        <SideMenu />
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                padding: 3,
                                mb: 0,
                                [theme.breakpoints.down("md")]: { padding: 1, mb: "65px" },
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                </CompetitionContext.Provider>
            </UserContext.Provider>
        </Box>
    );
}
