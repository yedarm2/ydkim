import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

import { RootState } from '../../../store';

export const useCounter = () => {
	return useSelector((state: RootState) => state.counter.value);
};

export const useCounterDispatch = () => {
	const dispatch = useDispatch();

	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
	};
};
