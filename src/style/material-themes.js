import { createTheme } from '@mui/material/styles';

const h1 = { fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '30px' };
const h2 = { fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px' };
const h3 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '20px' };
const h4 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' };

export const mainTheme = createTheme({
	palette: {
		primary: {
			contrastText: '#fff',
			dark: '#1565c0',
			light: '#42a5f5',
			main: '#121212'
		},
		text: {
			primary: '#fff',
			secondary: '#a7a7a7'
		}
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1,
		h2,
		h3,
		h4
	}
});
