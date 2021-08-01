import React from 'react';

export default function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
	const onChange = event => {
		onSetDiff(parseInt(event.target.value));
	};
	return (
		<div>
			<h1>{number}</h1>
			<div>
				<input type="number" value={diff} onChange={onChange} />
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</div>
	);
}
