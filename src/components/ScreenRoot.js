import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { connect } from 'react-redux';
import { ROUTES } from '../routes/routes';
import SideNav from './SideNav/SideNav';
import MobileNav from './MobileNav/MobileNav';
import Player from './Player/Player';
import Login from './Login/Login';
import { fetchUser, fetchPlaylist } from '../reduxStore/actions/index';

const spotifyApi = new SpotifyWebApi();

const setupSpotifyConnect = (token, setDeviceId) => {
	const player = new window.Spotify.Player({
		name: 'Web Playback SDK Quick Start Player',
		getOAuthToken: (cb) => {
			cb(token);
		},
		volume: 0.5
	});

	// Ready
	player.addListener('ready', ({ device_id }) => {
		console.log('Ready with Device ID', device_id);
		setDeviceId(device_id);

		spotifyApi.transferMyPlayback([device_id]);
	});

	// Not Ready
	player.addListener('not_ready', ({ device_id }) => {
		console.log('Device ID has gone offline', device_id);
	});

	player.addListener('initialization_error', ({ message }) => {
		console.error(message);
	});

	player.addListener('authentication_error', ({ message }) => {
		console.error(message);
	});

	player.addListener('account_error', ({ message }) => {
		console.error(message);
	});

	player.connect();
};

const ScreenRoot = ({ token, playlists, fetchUser, fetchPlaylist }) => {
	const [deviceId, setDeviceId] = useState();

	useEffect(() => {
		// Set up spotify:
		spotifyApi.setAccessToken(token);

		window.onSpotifyWebPlaybackSDKReady = () => {
			setupSpotifyConnect(token, setDeviceId);
		};

		const getData = async () => {
			fetchUser(spotifyApi);
			fetchPlaylist(spotifyApi);
			const devices = await spotifyApi.getMyDevices();
			console.log(devices.body);
		};

		if (token) getData();
	}, [token, fetchUser]);

	const LogedIn = () => (
		<Router>
			<Box sx={{ paddingBottom: { xs: '146px', md: '90px' } }}>
				<Switch>
					{ROUTES.map((route, i) => (
						<Route
							key={i}
							path={route.path}
							exact={route.exact}
							render={(props) => <route.component spotifyApi={spotifyApi} {...props} />}
						/>
					))}
				</Switch>
				<SideNav />
			</Box>
			<Player
				spotifyApi={spotifyApi}
				deviceId={deviceId}
				image={'/Justin-Bieber.png'}
				title={'Peaches'}
				artist={'Justin Bieber'}
			/>
			<MobileNav />
		</Router>
	);

	return token ? <LogedIn /> : <Login />;
};

const mapDispatch = (dispatch) => {
	return {
		fetchUser: (data) => dispatch(fetchUser(data)),
		fetchPlaylist: (data) => dispatch(fetchPlaylist(data))
	};
};

const mapState = (state) => {
	return {
		token: state.auth.token,
		playlists: state.playlist.items
	};
};

export default connect(mapState, mapDispatch)(ScreenRoot);
