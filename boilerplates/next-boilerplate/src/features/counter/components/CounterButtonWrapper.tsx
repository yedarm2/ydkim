import { FC, memo } from 'react';
import { useCounterMutations, useCounterState } from '../hooks';
import { CounterButton, Wrapper } from './CounterButtonWrapper.style';

const CounterButtonWrapper: FC = () => {
	const { isLoading } = useCounterState();
	const { increment, decrement } = useCounterMutations();

	return (
		<Wrapper>
			<CounterButton color="green" onClick={decrement} disabled={isLoading}>
				decrement
			</CounterButton>
			<CounterButton color="yellow" onClick={increment} disabled={isLoading}>
				increment
			</CounterButton>
		</Wrapper>
	);
};

export default memo(CounterButtonWrapper);
