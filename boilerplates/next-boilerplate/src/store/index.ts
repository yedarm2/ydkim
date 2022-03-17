import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import counterReducer, { counterSaga } from '../features/counter/store/counterSlice';
import { pokemonApi } from '../features/pokemon/store/pokemonQueries';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: getDefaultMiddleware => {
		let middlewares = getDefaultMiddleware().concat([pokemonApi.middleware, sagaMiddleware]);

		if (process.env.NODE_ENV !== 'production') {
			middlewares = middlewares.concat(logger);
		}

		return middlewares;
	},
});

sagaMiddleware.run(function* () {
	yield all([counterSaga()]);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
