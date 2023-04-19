import { Panel } from "@/components/dashboard/panels/panel";
import { Box, Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { AddMappingFormData } from "@/components/dashboard/oresults/oresults.type";
import { useForm } from "react-hook-form";
import { useCreateMapping } from "@/components/dashboard/oresults/addMapping.hook";
import { useDevices } from "@/hooks/device/devices.hook";
import { useTranslation } from "react-i18next";

export default function AddMapping() {
    const devices = useDevices();
    const { createMappingHandler } = useCreateMapping();
    const { register, handleSubmit } = useForm<AddMappingFormData>();
    const { t } = useTranslation("dashboard", { keyPrefix: "oresults" });

    return (
        <Panel md={12}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 4,
                }}
            >
                <Typography component="h4" variant="h5" sx={{ textTransform: "uppercase", paddingBottom: 3 }}>
                    {t("mapNewDevice")}
                </Typography>
                <Box component="form" onSubmit={handleSubmit(createMappingHandler)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="command_type"
                        select
                        type={"number"}
                        label={t("localID")}
                        {...register("nodeId", {})}
                    >
                        {devices.allDevices?.map((device) => (
                            <MenuItem key={device.node_id} value={device.id}>
                                {device.node_id}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="oresutlsKey"
                        label={t("oresultsApiKey")}
                        autoComplete="oresultsKey"
                        autoFocus
                        {...register("oresultsKey", {})}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {t("mapDeviceButton")}
                    </Button>
                </Box>
            </Box>
        </Panel>
    );
}
