import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function SideNavOption({ name, playlistId }) {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => console.log(`Go to /playlist/:${playlistId}`)}>
				<ListItemText primary={name} />
			</ListItemButton>
		</ListItem>
	);
}

export default SideNavOption;
