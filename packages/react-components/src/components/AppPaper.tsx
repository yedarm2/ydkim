import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

import { ThemeType } from '../types';
import { ThemeProvider } from '../utils';
import { themeMixin } from '../mixins';

export interface AppPaperProps {
	externalTheme?: ThemeType;
}

const Paper = styled.div`
	width: 100vw;
	height: 100vh;

	overflow-x: hidden;
	overflow-y: auto;

	${themeMixin.backgroundColor}
	${themeMixin.color}

	position: relative;
`;

export const AppPaper: FC<PropsWithChildren<AppPaperProps>> = ({ externalTheme, children }) => {
	return (
		<ThemeProvider externalTheme={externalTheme}>
			<Paper>{children}</Paper>
		</ThemeProvider>
	);
};
