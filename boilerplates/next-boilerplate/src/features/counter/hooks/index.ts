import { useAppDispatch, useAppSelector } from 'src/hooks';
import { increment, decrement } from '../store/counterSlice';

export const useCounter = () => {
	return useAppSelector(state => state.counter.value);
};

export const useCounterDispatch = () => {
	const dispatch = useAppDispatch();

	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
	};
};
