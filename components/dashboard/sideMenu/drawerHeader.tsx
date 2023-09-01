import React, { useContext } from "react";
import { Box, Link } from "@mui/material";
import { urlConf, withID } from "@/src/urlConf";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";

interface Props {
    open: boolean;
}

export const DrawerHeader: React.FC<Props> = ({ open }) => {
    const context = useContext(CompetitionContext);

    return (
        <Link
            href={withID(urlConf.dashboard.overview, context.competition?.id)}
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                padding: theme.spacing(1, 1),
            })}
        >
            <Box
                sx={{
                    borderRadius: 1,
                    backgroundColor: "none",
                    marginTop: 1,
                    marginLeft: 1,
                    position: "relative",
                    height: 45,
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    style={{
                        transitionDuration: "0.2s",
                        opacity: open ? 0 : 1,
                        position: "absolute",
                    }}
                    src={"/logoSmall.png"}
                    height={35}
                    alt={"OriLive logo small"}
                />
                <img
                    src={"/logo.png"}
                    style={{
                        transitionDuration: "0.3s",
                        opacity: open ? 1 : 0,
                        position: "absolute",
                    }}
                    alt={"OriLive logo"}
                    height={35}
                />
            </Box>
        </Link>
    );
};
