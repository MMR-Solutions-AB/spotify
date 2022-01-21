import { Box, Grid, Typography, Button } from '@mui/material';

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
				sx={{ height: 'calc(100% - 105px)' }}
			>
				<Grid item xs={12} lg={12} sx={{ textAlign: 'center' }}>
					<Typography color="text.primary" variant={'h1'} gutterBottom>
						Spotify Clone
					</Typography>
					<Typography color="text.primary" variant={'caption'} mb={6}>
						powered by
					</Typography>
				</Grid>
				<Grid item xs={8} md={4} lg={3}>
					<img src="/ta-logo.png" style={{ width: '100%' }} alt="Techover" />
				</Grid>
				<Grid item xs={12} style={{ textAlign: 'center' }}>
					<Button
						size="large"
						variant="contained"
						color="secondary"
						onClick={() => (window.location.href = 'https://www.academy.techover.nu/')}
					>
						Ansök nu!
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
