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
import { useParams } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SongRow from '../SongRow/SongRow';

const Playlist = ({ name, image, songs }) => {
	// const { playlistId } = useParams();

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
				<Grid item sm={12} lg={2}>
					<img src={image} style={{ width: '100%' }} />
				</Grid>
				<Grid
					item
					sm={12}
					lg={10}
					sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
				>
					<Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 6 }}>
						Playlist
					</Typography>
					<Typography variant="h1" sx={{ color: 'text.primary' }}>
						{name}
					</Typography>
				</Grid>
			</Grid>
			{/* Song list */}
			<Grid container spacing={2}>
				<Grid item sm={12} lg={2}>
					<Fab color="primary" aria-label="add">
						<PlayArrowIcon sx={{ color: 'text.primary' }} fontSize="large" />
					</Fab>
				</Grid>
				<Grid sm={12}>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>#</TableCell>
									<TableCell>Title</TableCell>
									<TableCell align="right">Album</TableCell>
									<TableCell align="right">Duration</TableCell>
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
