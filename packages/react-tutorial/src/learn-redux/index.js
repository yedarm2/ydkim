import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './module';

import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

export default function Index() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
