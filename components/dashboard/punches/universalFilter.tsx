import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
    options: string[];
    selectedValues: string[];
    setSelectedVaues: (value: string[]) => void;
    title: string;
}

export default function UniversalFilter({ options, selectedValues, setSelectedVaues, title }: Props) {
    const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
        const {
            target: { value },
        } = event;
        console.log(event.target.value);
        setSelectedVaues(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <div>
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">{title}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedValues}
                    onChange={handleChange}
                    input={<OutlinedInput label={title} />}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
