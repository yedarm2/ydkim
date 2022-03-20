import { FC, memo } from 'react';
import { useCounterState } from '../hooks';
import { NumberDisplayer } from './CounterDisplayer.style';

const CounterDisplayer: FC = () => {
	const { data: counter, isLoading } = useCounterState();

	return <NumberDisplayer>{!isLoading ? JSON.stringify(counter) : '--'}</NumberDisplayer>;
};

export default memo(CounterDisplayer);
