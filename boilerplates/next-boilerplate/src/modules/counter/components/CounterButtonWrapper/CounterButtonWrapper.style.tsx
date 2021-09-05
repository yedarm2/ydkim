import styled from '@emotion/styled';

export const Button = styled.button<CounterButtonProps>`
	width: 100px;
	height: 30px;
	border: 0;
	border-radius: 10px;
	font-size: 20px;

	background-color: ${({ buttonType }) => (buttonType === 'previous' ? 'green' : 'gold')};
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	${Button} {
		&:first-child {
			margin: 0 20px 0 0;
		}
	}
`;
