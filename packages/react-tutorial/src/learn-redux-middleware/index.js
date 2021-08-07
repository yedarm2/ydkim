import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import rootReducer from './modules';

const customHistory = createBrowserHistory();

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }), logger),
	),
);

export default function Index() {
	return (
		<Router history={customHistory}>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	);
}
