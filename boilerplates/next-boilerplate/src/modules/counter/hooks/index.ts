import { useContext } from 'react';
import { CounterContext, CounterDispatchContext } from '../contexts';

export const useCounter = () => {
	return useContext(CounterContext);
};

export const useCounterDispatch = () => {
	const dispatch = useContext(CounterDispatchContext);
	const increment = () => dispatch(1);
	const decrement = () => dispatch(-1);

	return {
		increment,
		decrement,
	};
};
