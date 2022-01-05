import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

function Library({ playlists }) {
	const renderPlaylistItems = () => {
		if (!playlists) return 'Loading';
		return playlists.map((playlist, i) => <PlaylistItem {...playlist} key={i} />);
	};

	return (
		<Box
			className="Library"
			sx={{ display: { xs: 'block', md: 'none' }, background: 'black', minHeight: '100vh', padding: '30px 16px' }}
		>
			<Typography variant="h1" sx={{ color: 'text.primary' }}>
				Ditt bibliotek
			</Typography>
			<List>{renderPlaylistItems()}</List>
		</Box>
	);
}

export default Library;
