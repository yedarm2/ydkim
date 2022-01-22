import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { ThemeType } from '../types';

import { ThemeProvider } from '../utils';

export interface AppPaperProps {
	externalTheme?: ThemeType;
}

const globalStyle = css`
	html,
	body {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
`;

const Paper = styled.div`
	width: 100vw;
	height: 100vh;

	overflow-x: hidden;
	overflow-y: auto;

	background-color: ${props => {
		return props?.theme?.backgroundColor?.primary;
	}};
	color: ${props => props?.theme?.color?.primary};

	position: relative;
`;

export const AppPaper: FC<AppPaperProps> = ({ externalTheme, children }) => {
	return (
		<ThemeProvider externalTheme={externalTheme}>
			<GlobalStyles />
			<Paper>{children}</Paper>
		</ThemeProvider>
	);
};
