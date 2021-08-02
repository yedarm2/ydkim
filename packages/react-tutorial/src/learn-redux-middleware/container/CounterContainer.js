import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

export default function CounterContainer() {
	const number = useSelector(state => state.counter);
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};

	return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
}
