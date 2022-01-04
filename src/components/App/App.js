import './App.css';
import SideNav from '../SideNav/SideNav';
import Library from '../Library/Library';

function App() {
	const mockData = [
		{ name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
		{ name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
		{ name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
		{ name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
		{ name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' }
	];

	return (
		<div className="App">
			<SideNav playlists={mockData} />
			<Library playlists={mockData} />
		</div>
	);
}

export default App;
