import { Button, Box } from '@mui/material';

const Login = ({}) => {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>
			<img src="/Spotify_Logo.png" style={{ marginBottom: 300, width: '70%', maxWidth: 500 }} />
			<Button color="primary" variant="contained" size="large">
				Login to spotify
			</Button>
		</Box>
	);
};

export default Login;
