import styled from '@emotion/styled';
import Button from 'src/features/common/components/Button/Button';

export interface CounterButtonProps {}

export const CounterButton = styled(Button)<CounterButtonProps>``;

export const Wrapper = styled.div`
	${CounterButton} {
		&:first-child {
			margin: 0 20px 0 0;
		}
	}
`;
