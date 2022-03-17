import { FC, memo } from 'react';
import { useCounterDispatch, useCounterServerLoading } from '../hooks';
import { CounterButton, Wrapper } from './CounterButtonWrapper.style';

const CounterButtonWrapper: FC = () => {
	const { increment, decrement } = useCounterDispatch();
	const isLoading = useCounterServerLoading();

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
