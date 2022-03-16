import { FC } from 'react';
import { CounterProvider } from '../contexts';
import CounterButtonWrapper from './CounterButtonWrapper';
import CounterDisplayer from './CounterDisplayer';
import CounterHeader from './CounterHeader';

const Counter: FC = () => {
	return (
		<CounterProvider>
			<CounterHeader />
			<CounterDisplayer />
			<CounterButtonWrapper />
		</CounterProvider>
	);
};

export default Counter;
