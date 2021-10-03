import { FC } from 'react';
import { CounterProvider } from '../../contexts';
import CounterButtonWrapper from '../CounterButtonWrapper/CounterButtonWrapper';
import CounterDisplayer from '../CounterDisplayer/CounterDisplayer';
import CounterHeader from '../CounterHeader/CounterHeader';

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
