import React, { ReactNode } from "react";
import { Panel } from "@/components/dashboard/panels/panel";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface Props {
    heading: string;
    size: number;

    button?: ReactNode;
    children?: ReactNode | ReactNode[];
}

export const BasePanel: React.FC<Props> = ({ heading, size, button, children }) => {
    const childArr = React.Children.toArray(children);

    return (
        <Panel md={size}>
            <Box p={2} sx={{ height: "100%" }}>
                <Grid2 container columnSpacing={3} rowSpacing={2} p={1} sx={{ height: "calc(100% - 40px)" }}>
                    <Grid2 xs={12}>
                        <Typography variant={"h5"} fontWeight={"bolder"}>
                            {heading}
                        </Typography>
                    </Grid2>
                    {childArr.map((child, key) => {
                        return (
                            <Grid2 key={key} md={size > 7 ? 6 : 12} xs={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "column",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    {child}
                                </Box>
                            </Grid2>
                        );
                    })}
                </Grid2>

                {button ? (
                    <Grid2 container paddingTop={0}>
                        <Grid2 md={size > 7 ? 6 : 12} xs={12}>
                            {button}
                        </Grid2>
                    </Grid2>
                ) : (
                    <></>
                )}
            </Box>
        </Panel>
    );
};
