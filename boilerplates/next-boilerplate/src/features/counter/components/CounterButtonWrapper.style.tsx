import styled from '@emotion/styled';
import Button from '../../common/components/Button';

export interface CounterButtonProps {}

export const CounterButton = styled(Button)<CounterButtonProps>``;

export const Wrapper = styled.div`
	//* 현재 swc에서는 emotion 내부에서 컴포넌트 셀렉터를 넣지 못한다. 예정.. ㅠㅠ
	${CounterButton} {
		&:first-child {
			margin: 0 20px 0 0;
		}
	}
`;
