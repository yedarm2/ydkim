import { createTheme } from '@vanilla-extract/css';

export const [defaultThemeClass, themeVars] = createTheme({
	colors: {
		white: '#fff',
		blue: '#128afa',
		lightBlue: '#c0e0ff',
		black: '#000',
		gray100: '#333',
		gray200: '#aaa',
		gray300: '#ddd',
		warn: '#ffa93a',
		error: '#ff3a3a',
	},
});
