import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

export default function App() {
	return (
		<>
			<CounterContainer />
			<hr />
			<TodosContainer />
		</>
	);
}
