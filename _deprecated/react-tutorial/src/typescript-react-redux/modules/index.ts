import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter from './counter';
import todos from './todos';
import github, { githubSaga } from './github';

const rootReducer = combineReducers({
	counter,
	todos,
	github,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
	yield all([githubSaga()]);
}
