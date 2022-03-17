import { FC, memo } from 'react';
import { useCounter, useCounterServerLoading } from '../hooks';
import { NumberDisplayer } from './CounterDisplayer.style';

const CounterDisplayer: FC = () => {
	const counter = useCounter();
	const isLoading = useCounterServerLoading();

	return <NumberDisplayer>{!isLoading ? counter : '--'}</NumberDisplayer>;
};

export default memo(CounterDisplayer);
