import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { increment, decrement, load } from '../store/counterSlice';

import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getCount, sendCount } from '../services/api';

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

export const useCounterState = () => {
	return useQuery({
		queryKey: ['counter'],
		queryFn: () => getCount().then(result => result.data),
	});
};

export const useCounterMutations = () => {
	const { data: counter } = useCounterState();

	const queryClient = useQueryClient();
	const mutateCount = useMutation({
		mutationFn: sendCount,
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['counter'],
			});
		},
	});

	return {
		increment: () => mutateCount.mutate(counter + 1),
		decrement: () => mutateCount.mutate(counter - 1),
	};
};
