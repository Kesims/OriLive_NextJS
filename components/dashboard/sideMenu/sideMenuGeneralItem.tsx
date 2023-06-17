import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";

interface Props {
    icon: React.ReactNode;
    content: string | React.ReactNode;
    href?: string;
    open: boolean;
}

export default function SideMenuGeneralItem({ icon, content, href, open }: Props) {
    return (
        <ListItem disablePadding sx={{ display: "block" }}>
            <Link href={href} sx={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    {typeof content === "string" ? (
                        <ListItemText primary={content} sx={{ opacity: open ? 1 : 0 }} />
                    ) : (
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>{content}</ListItemText>
                    )}
                </ListItemButton>
            </Link>
        </ListItem>
    );
}
