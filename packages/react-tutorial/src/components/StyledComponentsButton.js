import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
	${({ theme, color }) => {
		const selected = theme.palette[color];
		return css`
			background: ${selected};
			&:hover {
				background: ${lighten(0.1, selected)};
			}
			&:active {
				background: ${darken(0.1, selected)};
			}
		`;
	}}
`;

const StyledButton = styled.button`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	padding: 0 1rem;

	/* 크기 */
	height: 2.25rem;
	font-size: 1rem;

	/* 색상 */
	${colorStyles}

	& + & {
		margin-left: 1rem;
	}
`;

function StyledComponentsButton({ children, color, ...rest }) {
	return (
		<StyledButton color={color} {...rest}>
			{children}
		</StyledButton>
	);
}

StyledComponentsButton.defaultProps = {
	color: 'blue',
};

export default StyledComponentsButton;
