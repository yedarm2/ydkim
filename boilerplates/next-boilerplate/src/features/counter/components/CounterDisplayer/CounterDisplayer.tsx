import { FC, memo } from 'react';
import { useCounter } from '../../hooks';
import { NumberDisplayer } from './CounterDisplayer.style';

const CounterDisplayer: FC = () => {
	const counter = useCounter();
	return <NumberDisplayer>{counter}</NumberDisplayer>;
};

export default memo(CounterDisplayer);
