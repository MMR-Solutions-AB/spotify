import {
	Typography,
	Grid,
	Box,
	Fab,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SongRow from '../SongRow/SongRow';
import { useParams } from 'react-router-dom';

const mockSongs = [
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 154 },
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 124 },
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
	{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 }
];

const Playlist = ({ name, image, songs = mockSongs }) => {
	const { playlistId } = useParams();
	console.log(playlistId);

	// api som använder playlistId

	const renderSongRows = () => {
		if (!songs) return [1, 2, 3, 4, 5, 6].map((e, i) => <SongRow loading={true} key={i} />);
		return songs.map((song, i) => <SongRow {...song} key={i} index={i} />);
	};

	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				padding: '30px',
				paddingLeft: { md: '300px', sm: '30px' },
				minHeight: '100vh'
			}}
		>
			{/* Heror */}
			<Grid container spacing={2} mb={6}>
				<Grid item xs={12} lg={2}>
					<img src={image} style={{ width: '100%' }} />
				</Grid>
				<Grid
					item
					xs={12}
					lg={10}
					sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
				>
					<Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 2 }}>
						Playlist
					</Typography>
					<Typography variant="h1" sx={{ color: 'text.primary' }}>
						{name}
					</Typography>
				</Grid>
			</Grid>
			{/* Song list */}
			<Grid container spacing={2}>
				<Grid item xs={12} lg={2}>
					<Fab color="primary" aria-label="add">
						<PlayArrowIcon sx={{ color: 'text.primary' }} fontSize="large" />
					</Fab>
				</Grid>
				<Grid item xs={12}>
					<TableContainer>
						<Table size="small" padding="none">
							<TableHead>
								<TableRow>
									<TableCell>#</TableCell>
									<TableCell>Title</TableCell>
									<TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }} align="right">
										Album
									</TableCell>
									<TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }} align="right">
										Duration
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>{renderSongRows()}</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Box>
	);
};
export default Playlist;
