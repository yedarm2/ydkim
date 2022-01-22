import { createContext, FC, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';

import { ThemeType } from '../types';
import { themes } from '../variables/themes';

type SetTheme = (theme: ThemeType) => void;

interface ThemeProviderProps {
	externalTheme?: ThemeType;
}

const SetThemeContext = createContext<SetTheme>(null);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, externalTheme }) => {
	const [themeType, setTheme] = useState<ThemeType>('light');
	const theme = themes[externalTheme || themeType];

	return (
		<EmotionThemeProvider theme={theme}>
			<SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
		</EmotionThemeProvider>
	);
};

export const useTheme = () => {
	const theme = useEmotionTheme();

	if (!theme) {
		// TODO: 에러를 어떻게 생성할까...
		throw new Error('ThemeProvider를 렌더링하지 않았습니다...');
	}

	return theme;
};

export const useSetTheme = () => {
	const setTheme = useContext(SetThemeContext);

	if (!setTheme) {
		// TODO: 에러를 어떻게 생성할까...
		throw new Error('ThemeProvider를 렌더링하지 않았습니다...');
	}

	return setTheme;
};
