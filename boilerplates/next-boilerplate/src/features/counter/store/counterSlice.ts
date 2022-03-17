import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getCount, sendCount } from '../services/api';

// ? export 하지 않으면 '내보낸 변수기 어쩌구 저쩌구...' 에러가 걸린다... 어째서?
export interface CounterState {
	value: number;
	isLoading: boolean;
}

const initialState: CounterState = {
	value: 0,
	isLoading: false,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},

		endLoading: state => {
			state.isLoading = false;
		},

		setValue: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},

		load: () => {},

		increment: () => {},

		decrement: () => {},
	},
});

export const { setValue, startLoading, endLoading, load, increment, decrement } =
	counterSlice.actions;

function* loadSaga() {
	yield put(startLoading());
	try {
		const { data: count } = yield call(getCount);
		yield put(setValue(count));
	} finally {
		yield put(endLoading());
	}
}

function* incrementSaga() {
	yield put(startLoading());
	try {
		const count = yield select(state => state.counter.value);
		const newCount = count + 1;
		yield call(sendCount, newCount);
		yield put(setValue(count + 1));
	} finally {
		yield put(endLoading());
	}
}

function* decrementSaga() {
	yield put(startLoading());
	try {
		const count = yield select(state => state.counter.value);
		const newCount = count - 1;
		yield call(sendCount, newCount);
		yield put(setValue(count - 1));
	} finally {
		yield put(endLoading());
	}
}

export function* counterSaga() {
	yield takeEvery(increment.type, incrementSaga);
	yield takeEvery(decrement.type, decrementSaga);
	yield takeEvery(load.type, loadSaga);
}

export default counterSlice.reducer;
