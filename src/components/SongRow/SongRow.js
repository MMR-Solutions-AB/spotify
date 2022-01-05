import { TableCell, TableRow, Avatar, Typography, Skeleton, Box } from '@mui/material';

const SongRow = ({ index, image, title, artist, album, duration, loading }) => {
	const Title = () => {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
				<Avatar alt={album} src={image} variant="square" />
				<Box ml={2}>
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="body1" sx={{ color: 'text.secondary' }}>
						{artist}
					</Typography>
				</Box>
			</Box>
		);
	};

	const formatTime = (value) => {
		const rest = value % 60;
		const min = Math.floor(value / 60);
		console.log({ rest, min });
		const seconds = rest < 10 ? `0${rest}` : rest;
		return `${min}:${seconds}`;
	};

	return (
		<TableRow
			key={index}
			sx={{
				'& td': { border: 0 },
				cursor: 'pointer',
				'&:hover': {
					backgroundColor: '#d8d8d821 !important'
				}
			}}
			onClick={() => console.log(`Play ${title}`)}
			hover={true}
		>
			<TableCell>{loading ? <Skeleton variant="rectangular" width={20} height={30} /> : index + 1}</TableCell>
			<TableCell>{loading ? <Skeleton variant="rectangular" width={50} height={50} /> : <Title />}</TableCell>
			<TableCell align="right" sx={{ color: 'text.secondary', display: { xs: 'none', md: 'table-cell' } }}>
				{loading ? <Skeleton variant="rectangular" width={50} height={30} /> : album}
			</TableCell>
			<TableCell align="right" sx={{ color: 'text.secondary', display: { xs: 'none', md: 'table-cell' } }}>
				{loading ? <Skeleton variant="rectangular" width={20} height={30} /> : formatTime(duration)}
			</TableCell>
		</TableRow>
	);
};

export default SongRow;
