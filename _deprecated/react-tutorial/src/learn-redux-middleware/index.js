import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer, { rootSaga } from './modules';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
	context: {
		history: customHistory,
	},
});

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(
			ReduxThunk.withExtraArgument({ history: customHistory }),
			sagaMiddleware,
			logger,
		),
	),
);

sagaMiddleware.run(rootSaga);

export default function Index() {
	return (
		<Router history={customHistory}>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	);
}
