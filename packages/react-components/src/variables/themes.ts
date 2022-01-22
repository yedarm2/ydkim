import { Theme } from '@emotion/react';

import { colors } from './color';
import { ThemeType } from '../types';

type ThemeMap = {
	[key in ThemeType]: Theme;
};

const lightTheme: Theme = {
	primary: {
		textColor: colors.black,
		backgroundColor: '#fff',
	},
};

const darkTheme: Theme = {
	primary: {
		textColor: '#fff',
		backgroundColor: colors.black,
	},
};

export const themes: ThemeMap = {
	light: lightTheme,
	dark: darkTheme,
};
