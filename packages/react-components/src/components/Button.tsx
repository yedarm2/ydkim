import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { colors, fontSizes, sizeObject, type Color, type Size } from '../variables';

interface ButtonProps {
	color?: Color;
	size: Size;
	buttonType?: 'default' | 'reverse' | 'pressible';
}

interface ButtonStyle {
	(props: ButtonProps): SerializedStyles;
}

const defaultButtonStyle: ButtonStyle = props => css`
	color: #fff;
	background-color: ${colors[props.color]};
	border: 2px solid ${colors[props.color]};

	border-radius: 1000px;
`;

const reverseButtonStyle: ButtonStyle = props => css`
	color: ${colors[props.color]};
	background: #fff;
	border: 2px solid ${colors[props.color]};

	border-radius: 1000px;
`;

const pressibleButtonStyle: ButtonStyle = props => css`
	border: 0;
	border-radius: 5px;
	border-bottom: 3px solid rgba(0, 0, 0, 0.2);

	background-color: ${colors[props.color]};
	color: #fff;

	&:active {
		border-top: 3px solid rgba(0, 0, 0, 0.2);
		border-bottom: 0;
	}
`;

const buttonStyles = {
	default: defaultButtonStyle,
	reverse: reverseButtonStyle,
	pressible: pressibleButtonStyle,
};

const buttonPaddings: sizeObject = {
	small: '5px 8px',
	medium: '10px 15px',
	large: '15px 20px',
	xLarge: '22px 30px',
	xxLarge: '30px 40px',
};

export const Button = styled.button<ButtonProps>`
	box-sizing: border-box;
	cursor: pointer;
	padding: ${props => buttonPaddings[props.size]};
	font-size: ${props => fontSizes[props.size]};
	outline: none;

	${props => buttonStyles[props.buttonType]}
`;

Button.defaultProps = {
	color: 'gray',
	buttonType: 'default',
};
