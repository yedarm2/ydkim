import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counterReducer, { counterSaga } from '../../features/counter/store/counterSlice';
import { pokemonApi } from '../../features/pokemon/store/pokemonQueries';

export const rootReducer = combineReducers({
	counter: counterReducer,
	[pokemonApi.reducerPath]: pokemonApi.reducer,
});

export function* rootsaga() {
	yield all([counterSaga()]);
}
