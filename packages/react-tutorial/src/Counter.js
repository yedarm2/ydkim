import React, { Component, useReducer } from 'react';

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			throw new Error('Unhandled Action');
// 	}
// }

// function Counter() {
// 	const [number, dispatch] = useReducer(reducer, 0);

// 	const onIncrease = () => {
// 		dispatch({
// 			type: 'INCREMENT',
// 		});
// 	};

// 	const onDecrease = () => {
// 		dispatch({
// 			type: 'DECREMENT',
// 		});
// 	};

// 	return (
// 		<div>
// 			<h1>{number}</h1>
// 			<button onClick={onIncrease}>+1</button>
// 			<button onClick={onDecrease}>-1</button>
// 		</div>
// 	);
// }

class Counter extends Component {
	state = {
		counter: 0,
		fixed: 1,
	};

	handleIncrease = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	handleDecrease = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	};

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={this.handleIncrease}>+1</button>
				<button onClick={this.handleDecrease}>-1</button>
				<p>고정된 값: {this.state.fixed}</p>
			</div>
		);
	}
}

export default Counter;
