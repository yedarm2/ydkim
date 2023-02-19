import { Global, css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const globalStyleSheet = css`
	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	body {
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}
`;

export const GlobalStyle = ({ children }: PropsWithChildren) => (
	<>
		<Global styles={globalStyleSheet} />
		{children}
	</>
);
