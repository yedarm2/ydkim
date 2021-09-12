import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../modules/counter/store/counterSlice';
import { pokemonApi } from '../modules/pokemon/store/pokemonQueries';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
