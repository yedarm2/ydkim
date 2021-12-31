import { FC, memo } from 'react';
import { useCounterDispatch } from '../../hooks';
import { CounterButton, Wrapper } from './CounterButtonWrapper.style';

const CounterButtonWrapper: FC = () => {
	const { increment, decrement } = useCounterDispatch();

	return (
		<Wrapper>
			<CounterButton color="green" onClick={decrement}>
				decrement
			</CounterButton>
			<CounterButton color="yellow" onClick={increment}>
				increment
			</CounterButton>
		</Wrapper>
	);
};

export default memo(CounterButtonWrapper);
