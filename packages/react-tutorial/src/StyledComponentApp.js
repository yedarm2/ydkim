import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
	width: 5rem;
	height: 5rem;
	background: ${props => props.color};
	border-radius: 50%;
	${props =>
		props.huge &&
		css`
			width: 10rem;
			height: 10rem;
		`}
`;

function StyledComponentApp() {
	return (
		<div>
			<Circle color="black" />
			<Circle color="blue" huge />
		</div>
	);
}

export default StyledComponentApp;
