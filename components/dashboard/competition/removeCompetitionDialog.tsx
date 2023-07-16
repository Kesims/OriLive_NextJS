import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useRemoveCompetition from "@/hooks/competition/removeCompetition.hook";
import { useTranslation } from "react-i18next";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box } from "@mui/material";

interface Props {
    competitionId?: number;
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function RemoveCompetitionDialog({ competitionId, open, setOpen }: Props) {
    const { removeCompetition } = useRemoveCompetition();
    const { t } = useTranslation("dashboard", { keyPrefix: "deleteCompetitionDialog" });

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" fontWeight={"bolder"} sx={{}}>
                    <Box mb={2}>
                        <WarningAmberIcon
                            color={"error"}
                            fontSize={"large"}
                            sx={{ marginRight: 2, transform: "translateY(25%)" }}
                        />
                        <Box
                            sx={{
                                display: "inline-flex",
                                flexFlow: "column",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {t("title")}
                        </Box>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" mb={2}>
                        {t("text")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color={"info"}>
                        {t("cancel")}
                    </Button>
                    <Button
                        onClick={async () => {
                            handleClose();
                            if (!competitionId) return;
                            await removeCompetition(competitionId);
                        }}
                        autoFocus
                        color={"error"}
                    >
                        {t("delete")}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
