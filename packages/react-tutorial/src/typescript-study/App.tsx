import React, { FC } from 'react';
import MyForm from './MyForm';
import Counter from './Counter';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

const App: FC = () => {
	const onSubmit = (form: { name: string; description: string }) => {
		console.log(form);
	};

	return (
		<SampleProvider>
			<MyForm onSubmit={onSubmit} />
			<Counter />
			<ReducerSample />
		</SampleProvider>
	);
};

export default App;
