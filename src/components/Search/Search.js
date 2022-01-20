import { Box, InputBase, Paper, Grid, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TableOfSongs from '../TableOfSongs/TableOfSongs';
import { useState } from 'react';

const boxStyle = {
	minHeight: 'calc(100vh - 90px)',
	bgcolor: 'background.paper',
	padding: '30px',
	paddingLeft: { md: '300px', sm: '30px' }
};

const Search = ({ spotifyApi }) => {
	const [songs, setSongs] = useState(null);
	const [loading, setLoading] = useState(false);

	const formatSongData = (tracks) => {
		return tracks.map(({ album, name, artists, duration_ms }) => {
			return { track: { album, name, artists, duration_ms } };
		});
	};

	const handleOnChange = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { value } = e.target;
		try {
			const result = await spotifyApi.searchTracks(value);
			const { items } = result.body.tracks;
			console.log(items);
			const formattedSong = formatSongData(items);
			console.log(formattedSong);
			setSongs(formattedSong);
			setLoading(false);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Box sx={boxStyle}>
			{/* <Button
				onClick={() => {
					spotifyApi.play({
						context_uri: 'spotify:album:3SpBlxme9WbeQdI9kx7KAV',
						offset: {
							position: 5
						}
					});
				}}
			>
				play
			</Button> */}
			<form
				onSubmit={(e) => e.preventDefault()}
				style={{
					borderRadius: 20,
					padding: '6px 20px',
					display: 'flex',
					alignItems: 'center',
					width: 250,
					backgroundColor: 'white',
					color: 'black',
					marginBottom: 20
				}}
			>
				<SearchIcon fontSize="large" sx={{ marginRight: '6px' }} />
				<InputBase
					id="outlined-basic"
					label="Songs or Artists"
					variant="outlined"
					sx={{ color: 'black' }}
					onChange={handleOnChange}
				/>
			</form>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					{songs === null ? (
						<Typography>Search for Songs</Typography>
					) : (
						<TableOfSongs loading={loading} spotifyApi={spotifyApi} playlistId={'asdasd'} songs={songs} />
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Search;
