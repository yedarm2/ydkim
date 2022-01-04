import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { ElementStyle } from '../types';

import { colors, fontSizes, SizeObject, Color, Size, disabledColor } from '../variables';

export interface ButtonProps {
	color?: Color;
	size?: Size;
	buttonType?: 'default' | 'reverse' | 'pressible';
	fullSize?: boolean;
	disabled?: boolean;
}

type ButtonStyle = ElementStyle<ButtonProps>;

const defaultButtonStyle: ButtonStyle = props => css`
	color: #fff;
	background-color: ${props.disabled ? disabledColor : colors[props.color]};
	border: 2px solid ${props.disabled ? disabledColor : colors[props.color]};

	border-radius: 1000px;
`;

const reverseButtonStyle: ButtonStyle = props => css`
	color: ${props.disabled ? disabledColor : colors[props.color]};
	background: #fff;
	border: 2px solid ${props.disabled ? disabledColor : colors[props.color]};

	border-radius: 1000px;
`;

const pressibleButtonStyle: ButtonStyle = props => css`
	border: 0;
	border-radius: 5px;
	border-bottom: 3px solid rgba(0, 0, 0, 0.2);

	background-color: ${props.disabled ? disabledColor : colors[props.color]};
	color: #fff;

	&:active {
		border-top: 3px solid rgba(0, 0, 0, 0.2);
		border-bottom: 0;
	}
`;

const fullSizeButtonStyle = css`
	width: 100%;
`;

const disabledButtonStyle = css`
	pointer-events: none;
`;

const buttonStyles = {
	default: defaultButtonStyle,
	reverse: reverseButtonStyle,
	pressible: pressibleButtonStyle,
};

const buttonPaddings: SizeObject = {
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
	margin: 0;

	${props => buttonStyles[props.buttonType]}
	${props => props.fullSize && fullSizeButtonStyle}
	${props => props.disabled && disabledButtonStyle}
`;

Button.defaultProps = {
	color: 'gray',
	size: 'medium',
	buttonType: 'default',
};
