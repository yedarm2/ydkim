import styled from '@emotion/styled';

export const buttonThemeColors = {
	red: '#fa5252',
	yellow: '#fcc419',
	orange: '#ff922b',
	green: '#40c057',
	blue: '#228be6',
	purple: '#7950f2',
	lime: '#82c91e',
	gray: '#343a40',
} as const;

interface ButtonProps {
	theme?: keyof typeof buttonThemeColors;
}

export const Button = styled.button<ButtonProps>`
	box-sizing: border-box;
	background-color: ${props => buttonThemeColors[props.theme]};
	color: #fff;
	cursor: pointer;
	border: 0;
	padding: 10px;
	border-radius: 5px;
	border-bottom: 3px solid rgba(0, 0, 0, 0.2);

	position: relative;

	&:active {
		border-top: 3px solid rgba(0, 0, 0, 0.2);
		border-bottom: 0;
	}
`;

Button.defaultProps = {
	theme: 'gray',
};
