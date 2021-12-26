import styled from '@emotion/styled';

interface ButtonProps {
	theme?: 'red' | 'blue' | 'gold';
}

export const Button = styled.button<ButtonProps>`
	box-sizing: border-box;
	background-color: ${props => props.theme};
	color: ${props => (props.theme ? 'white' : 'black')};
	cursor: pointer;
	border: 0;
`;
