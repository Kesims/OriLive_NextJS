import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import React from "react";
import { Box, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";

export default function ChangeLanguageButton() {
    const { t, i18n } = useTranslation("changeLanguageButton");
    const changeLanguageHandler = () => {
        changeLanguage(i18n.language === "cs" ? "en" : "cs");
    };

    return (
        <Box sx={{ position: "fixed", right: 0, top: 0, margin: 2 }}>
            <Tooltip title={t("tooltip")} placement={"left"}>
                <Button onClick={changeLanguageHandler} sx={{ backgroundColor: "white" }}>
                    {i18n.language === "cs" ? "en" : "cs"}
                </Button>
            </Tooltip>
        </Box>
    );
}
