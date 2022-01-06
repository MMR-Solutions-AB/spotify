import './App.css';
import { Box } from '@mui/system';
import SideNav from '../SideNav/SideNav';
import Library from '../Library/Library';
import Playlist from '../Playlist/Playlist';
import Login from '../Login/Login';
import MobileNav from '../MobileNav/MobileNav';
import Player from '../Player/Player';

function App() {
	const mockData = [
		{ name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
		{ name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
		{ name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
		{ name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
		{ name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' }
	];

	const songs = [
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 154 },
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 124 },
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 },
		{ image: '/Justin-Bieber.png', title: 'Holy', artist: 'Justin Bieber', album: 'No clue', duration: 180 }
	];

	return (
		<div className="App">
			<Box sx={{ paddingBottom: { xs: '146px', md: '90px' } }}>
				{/* <Login /> */}
				<SideNav playlists={mockData} />
				<Library playlists={mockData} />
				<Playlist name={'Rock from the 90s'} image="/Justin-Bieber.png" songs={songs} />
			</Box>
			<Player image={'/Justin-Bieber.png'} title={'Peaches'} artist={'Justin Bieber'} />
			<MobileNav />
		</div>
	);
}

export default App;
