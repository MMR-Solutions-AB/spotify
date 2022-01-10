import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

import { ROUTES } from '../routes/routes';
import SideNav from './SideNav/SideNav';
import MobileNav from './MobileNav/MobileNav';
import Player from './Player/Player';
import Login from './Login/Login';
import { getAccessToken } from '../login-to-spotify';

const spotifyApi = new SpotifyWebApi();

const ScreenRoot = () => {
	const [accessToken, setAccessToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [playlists, setPlaylists] = useState(null);

	useEffect(() => {
		const token = getAccessToken();
		setAccessToken(token);
		spotifyApi.setAccessToken(accessToken);

		if (spotifyApi.getAccessToken()) {
			const getData = async () =>{
				console.log(accessToken);
				const me = await spotifyApi.getMe();
				setCurrentUser(me.body);

				const playlists = await spotifyApi.getUserPlaylists();
				setPlaylists(playlists.body.items)
			}

			getData();
			
		}
	}, [accessToken]);

	if (accessToken) {
		return (
			<Router>
				<Box sx={{ paddingBottom: { xs: '146px', md: '90px' } }}>
					<Switch>
						{ROUTES.map((route, i) => (
							<Route
								key={i}
								path={route.path}
								exact={route.exact}
								render={(props) => <route.component {...props} />}
							/>
						))}
					</Switch>
					<SideNav playlists={playlists} />
				</Box>
				<Player image={'/Justin-Bieber.png'} title={'Peaches'} artist={'Justin Bieber'} />
				<MobileNav />
			</Router>
		);
	} else {
		return <Login/>;
	}

};

export default ScreenRoot;
