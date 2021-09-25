import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from '../modules/counter/store/counterSlice';
import { pokemonApi } from '../modules/pokemon/store/pokemonQueries';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: getDefaultMiddleware => {
		let middlewares = getDefaultMiddleware().concat(pokemonApi.middleware);

		if (process.env.NODE_ENV !== 'production') {
			middlewares = middlewares.concat(logger);
		}

		return middlewares;
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
