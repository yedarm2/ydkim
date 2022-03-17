import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { increment, decrement, load } from '../store/counterSlice';

export const useLoadCount = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(load());
	}, []);
};

export const useCounter = () => {
	return useAppSelector(state => state.counter.value);
};

export const useCounterServerLoading = () => {
	return useAppSelector(state => state.counter.isLoading);
};

export const useCounterDispatch = () => {
	const dispatch = useAppDispatch();

	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
	};
};
