import React, { FC } from 'react';
import MyForm from './MyForm';
import Counter from './Counter';
import ReducerSample from './ReducerSample';

const App: FC = () => {
	const onSubmit = (form: { name: string; description: string }) => {
		console.log(form);
	};

	return (
		<>
			<MyForm onSubmit={onSubmit} />
			<Counter />
			<ReducerSample />
		</>
	);
};

export default App;
