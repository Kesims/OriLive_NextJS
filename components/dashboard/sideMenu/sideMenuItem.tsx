import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface SideMenuProps {
	open: boolean;
	iconSrc: string;
	text: string;
}

interface SideMenuPropsClick {
	onClick: () => void;
	href?: undefined;
}

interface SideMenuPropsHref {
	href: string;
	onClick?: undefined;
}

type Props = SideMenuProps & (SideMenuPropsClick | SideMenuPropsHref);

export const SideMenuItem: React.FC<Props> = ({ open, href, iconSrc, text, onClick }) => {
	const Item = (
		<ListItem disablePadding sx={{ display: "block" }}>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: open ? "initial" : "center",
					px: 2.5,
				}}
				onClick={onClick}
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
	);

	if (href)
		return (
			<Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
				{Item}
			</Link>
		);
	return Item;
};
