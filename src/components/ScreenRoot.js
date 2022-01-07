import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import SideNav from './SideNav/SideNav';
import MobileNav from './MobileNav/MobileNav';
import Player from './Player/Player';
import { Box } from '@mui/material';

const ScreenRoot = () => {
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
				<SideNav />
			</Box>
			<Player image={'/Justin-Bieber.png'} title={'Peaches'} artist={'Justin Bieber'} />
			<MobileNav />
		</Router>
	);
};

export default ScreenRoot;
