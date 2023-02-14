import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import posts, { postsSaga } from './posts';

export default combineReducers({
	counter,
	posts,
});

export function* rootSaga() {
	yield all([counterSaga(), postsSaga()]);
}
