import { configureStore } from '@reduxjs/toolkit';
import { Context } from 'next-redux-wrapper';
import logger from 'redux-logger';

import counterReducer from '../features/counter/store/counterSlice';
import { pokemonApi } from '../features/pokemon/store/pokemonQueries';

export const createStore = (context: Context) =>
	configureStore({
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

export const store = createStore(null);

const createThunkFunction = <T = void, D = typeof store.dispatch, GS = typeof store.getState>(
	actionCreator: (args: T, dispatch?: D, getState?: GS) => any,
) => {
	return (args: T) => (dispatch: D, getState: GS) => {
		return actionCreator(args, dispatch, getState);
	};
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
