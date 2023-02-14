import React, { FC } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(Thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

const Index: FC = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Index;
