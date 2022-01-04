import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

function PlaylistItem({ name, playlistId, image }) {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => console.log(`Go to /playlist/:${playlistId}`)}>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src={image} variant="square" sx={{ height: 40, width: 40 }} />
				</ListItemAvatar>
				<ListItemText primary={name} sx={{ color: 'text.secondary' }} />
			</ListItemButton>
		</ListItem>
	);
}

export default PlaylistItem;
