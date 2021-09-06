import { FC, memo } from 'react';
import { useCounterDispatch } from '../../hooks';
import { CounterButton, Wrapper } from './CounterButtonWrapper.style';

const CounterButtonWrapper: FC<CounterButtonProps> = ({ buttonType }) => {
	const { increment, decrement } = useCounterDispatch();

	return (
		<Wrapper>
			<CounterButton buttonType="previous" onClick={decrement}>
				decrement
			</CounterButton>
			<CounterButton buttonType="next" onClick={increment}>
				increment
			</CounterButton>
		</Wrapper>
	);
};

export default memo(CounterButtonWrapper);
