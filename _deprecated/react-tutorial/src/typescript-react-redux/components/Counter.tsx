import React, { FC } from 'react';

type CounterProps = {
	count: number;
	onIncrease: () => void;
	onDecrease: () => void;
	onIncreaseBy: (diff: number) => void;
};

const Counter: FC<CounterProps> = ({ count, onIncrease, onDecrease, onIncreaseBy }) => (
	<div>
		<h1>{count}</h1>
		<button onClick={onIncrease}>+1</button>
		<button onClick={onDecrease}>-1</button>
		<button onClick={() => onIncreaseBy(5)}>+5</button>
	</div>
);

export default Counter;
