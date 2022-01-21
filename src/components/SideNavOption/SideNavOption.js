import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';

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
