import styled from '@emotion/styled';
import Button from 'src/features/common/components/Button/Button';

export const CounterButton = styled(Button)<CounterButtonProps>`
	width: 100px;
	height: 30px;
	font-size: 20px;

	background-color: ${({ buttonType }) => (buttonType === 'previous' ? 'green' : 'gold')};
`;

export const Wrapper = styled.div`
	${CounterButton} {
		&:first-child {
			margin: 0 20px 0 0;
		}
	}
`;
