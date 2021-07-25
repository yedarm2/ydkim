import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import StyledComponentsButton from './components/StyledComponentsButton';

const AppBlock = styled.div`
	width: 512px;
	margin: 0 auto;
	margin-top: 4rem;
	border: 1px solid black;
	padding: 1rem;
`;

const palette = {
	blue: '#228be6',
	gray: '#496057',
	pink: '#f06595',
};

function StyledComponentApp() {
	return (
		<ThemeProvider theme={{ palette }}>
			<AppBlock>
				<StyledComponentsButton>Button</StyledComponentsButton>
				<StyledComponentsButton color="gray">Button</StyledComponentsButton>
				<StyledComponentsButton color="pink">Button</StyledComponentsButton>
			</AppBlock>
		</ThemeProvider>
	);
}

export default StyledComponentApp;
