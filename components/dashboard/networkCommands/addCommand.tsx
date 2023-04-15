import React from "react";
import { Panel } from "../panels/panel";
import { Box, Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
    NetworkCommandFormData,
    networkCommandTypes,
} from "@/components/dashboard/networkCommands/networkCommand.types";
import { useCreateCommand } from "@/components/dashboard/networkCommands/createCommand.hook";
import { useForm } from "react-hook-form";

export default function AddCommand() {
    const { createNetworkCommandHandler } = useCreateCommand();
    const { register, handleSubmit } = useForm<NetworkCommandFormData>();

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
                    Vytvořit síťový příkaz
                </Typography>
                <Box component="form" onSubmit={handleSubmit(createNetworkCommandHandler)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="competition_id"
                        label="ID závoru"
                        autoComplete="competition_id"
                        autoFocus
                        {...register("competitionId", {})}
                    />
                    <TextField
                        margin="normal"
                        required
                        InputProps={{
                            inputProps: {
                                min: 0,
                            },
                        }}
                        fullWidth
                        label="Data"
                        type="number"
                        id="data"
                        autoComplete="data"
                        {...register("data", {})}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="command_type"
                        select
                        label="Typ příkazu"
                        defaultValue="node_mode"
                        {...register("type", {})}
                    >
                        {networkCommandTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Vytvořit
                    </Button>
                </Box>
            </Box>
        </Panel>
    );
}
