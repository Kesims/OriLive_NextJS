import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface SideMenuProps {
	open: boolean;
	href: string;
	iconSrc: string;
	text: string;
}

export const SideMenuItem: React.FC<SideMenuProps> = ({ open, href, iconSrc, text }) => {
	return (
		<Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
			<ListItem disablePadding sx={{ display: "block" }}>
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
						<img src={iconSrc} height={25} alt={href + " icon"} />
					</ListItemIcon>
					<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
};
