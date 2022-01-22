import { Theme } from '@emotion/react';

import { colors } from './color';
import { ThemeType } from '../types';

type ThemeMap = {
	[key in ThemeType]: Theme;
};

const lightTheme: Theme = {
	color: {
		primary: colors.black,
		revert: '#fff',
	},
	backgroundColor: {
		primary: '#fff',
		revert: colors.black,
	},
};

const darkTheme: Theme = {
	color: {
		primary: '#fff',
		revert: colors.black,
	},
	backgroundColor: {
		primary: colors.black,
		revert: '#fff',
	},
};

export const themes: ThemeMap = {
	light: lightTheme,
	dark: darkTheme,
};
