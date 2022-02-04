import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ListItemIcon, ListItem, ListItemButton, ListItemText } from '@mui/material';

function SideNavOption({ name, Icon, to }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<ListItem disablePadding>
			<ListItemButton
				component={NavLink}
				to={to}
				isActive={(match) => {
					setIsActive(!!match && match.isExact);
				}}
			>
				{Icon && (
					<ListItemIcon>
						<Icon sx={{ color: isActive ? 'primary.main' : 'text.secondary' }} />
					</ListItemIcon>
				)}
				<ListItemText primary={name} sx={{ color: isActive ? 'primary.main' : 'text.secondary' }} />
			</ListItemButton>
		</ListItem>
	);
}

export default SideNavOption;
