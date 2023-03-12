import React, { ReactNode } from "react";
import { Panel } from "@/components/dashboard/panels/panel";
import { Box, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { map } from "rxjs";

interface Props {
    heading: string;
    size: number;
    children: ReactNode | ReactNode[];
}

export const BasePanel: React.FC<Props> = ({ heading, size, children }) => {
    const childArr = React.Children.toArray(children);

    return (
        <Panel xs={size}>
            <Box p={2}>
                <Grid2 container columnSpacing={2} rowSpacing={2} p={1}>
                    <Grid2 xs={12}>
                        <Typography variant={"h5"} fontWeight={"bolder"}>
                            {heading}
                        </Typography>
                    </Grid2>
                    {childArr.map((child, key) => {
                        return (
                            <Grid2 key={key} xs={size > 7 ? 6 : 12}>
                                {child}
                            </Grid2>
                        );
                    })}
                </Grid2>
            </Box>
        </Panel>
    );
};
