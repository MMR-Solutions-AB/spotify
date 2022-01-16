import { Box, Grid } from '@mui/material';

const style = {
	position: 'fixed',
	top: 0,
	left: 0,
	height: '100vh',
	width: '100%'
};

const Home = ({}) => {
	return (
		<Box sx={style} className="gradient-animation">
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{ height: '100%' }}
			>
				<Grid item xs={8} md={4} lg={3}>
					<img src="/techover-logo.png" style={{ width: '100%' }} alt="Techover" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
