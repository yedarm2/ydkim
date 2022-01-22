import { css, Global } from '@emotion/react';
import { FC } from 'react';

const globalStyle = css`
	html,
	body {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
`;

export const GlobalStyles: FC = () => {
	return <Global styles={globalStyle} />;
};
