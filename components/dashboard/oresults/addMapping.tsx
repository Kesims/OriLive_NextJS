import { Panel } from "@/components/dashboard/panels/panel";
import { Box, Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { AddMappingFormData } from "@/components/dashboard/oresults/oresults.type";
import { useForm } from "react-hook-form";
import { useCreateMapping } from "@/components/dashboard/oresults/addMapping.hook";
import { useDevices } from "@/hooks/device/devices.hook";

export default function AddMapping() {
    const devices = useDevices();
    const { createMappingHandler } = useCreateMapping();
    const { register, handleSubmit } = useForm<AddMappingFormData>();

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
                    Mapovat nové zařízení
                </Typography>
                <Box component="form" onSubmit={handleSubmit(createMappingHandler)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="command_type"
                        select
                        type={"number"}
                        label="Lokální ID"
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
                        label="OResults API klíč"
                        autoComplete="oresultsKey"
                        autoFocus
                        {...register("oresultsKey", {})}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Mapovat zařízení
                    </Button>
                </Box>
            </Box>
        </Panel>
    );
}
