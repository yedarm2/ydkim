import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default function Index() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
