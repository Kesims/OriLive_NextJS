import { createTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import { csCZ, enUS } from "@mui/material/locale";

export const theme = createTheme(
    {
        palette: {
            primary: deepOrange,
        },
    },
    // lang === "cs" ? csCZ : enUS,
);
