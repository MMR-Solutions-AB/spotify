import { TableCell, TableRow, Avatar, Typography, Skeleton } from '@mui/material';

const SongRow = ({ index, image, title, artist, album, duration, loading }) => {
	const Title = () => {
		return (
			<>
				<Avatar alt={album} src={image} variant="square" />
				<Typography variant="subtitle1">{title}</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary' }}>
					{artist}
				</Typography>
			</>
		);
	};

	return (
		<TableRow
			key={index}
			sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
			selected={true}
			onClick={() => console.log(`Play ${title}`)}
		>
			<TableCell component="th" scope="row">
				{loading ? <Skeleton variant="rectangular" width={20} height={30} /> : index}
			</TableCell>
			<TableCell>{loading ? <Skeleton variant="rectangular" width={50} height={50} /> : <Title />}</TableCell>
			<TableCell align="right">
				{loading ? <Skeleton variant="rectangular" width={50} height={30} /> : album}
			</TableCell>
			<TableCell align="right">
				{loading ? <Skeleton variant="rectangular" width={20} height={30} /> : duration}
			</TableCell>
		</TableRow>
	);
};

export default SongRow;
