import styled from '@emotion/styled';

export interface ButtonProps {
	color: 'red' | 'yellow' | 'blue';
}

const Button = styled.button<ButtonProps>`
	cursor: pointer;
	box-sizing: border-box;
`;

export default Button;
