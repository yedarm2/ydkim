import type {
	CaseReducer,
	SliceCaseReducers,
	PayloadAction,
	AnyAction,
	ValidateSliceCaseReducers,
	Slice,
} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { takeEvery } from 'redux-saga/effects';

type ActionForReducer<Reducer> = Reducer extends CaseReducer<any, PayloadAction<infer Payload>>
	? PayloadAction<Payload>
	: Reducer extends { reducer: CaseReducer<any, PayloadAction<infer Payload>> }
	? PayloadAction<Payload>
	: AnyAction;

type SagasByActions<Reducers> = {
	[ReducerName in keyof Reducers]?: (
		action: ActionForReducer<Reducers[ReducerName]>,
	) => Generator<any, any, any>;
};

interface CreateSliceAndSagaPayload<State, Reducers extends SliceCaseReducers<State>> {
	name: string;
	initialState: State;
	reducers: ValidateSliceCaseReducers<State, Reducers>;
	sagas?: SagasByActions<Reducers>;
}

interface CreateSliceAndSagaResult<State, Reducers extends SliceCaseReducers<State>>
	extends Slice<State, Reducers, string> {
	saga: () => Generator<any, any, any>;
}

const createSliceAndSaga = <State, Reducers extends SliceCaseReducers<State>>({
	name = '',
	initialState,
	reducers,
	sagas = {},
}: CreateSliceAndSagaPayload<State, Reducers>): CreateSliceAndSagaResult<State, Reducers> => {
	const composedReducers: object = { ...reducers };

	// * sagas에만 정의되어 있고 reducers에 정의되어 있지 않은 key에 빈 함수를 넣음으로써 빈 리듀서를 추가한다.
	// * 하지만 타입으로 표현하는데에는 실패해서 사용하지 못하는 코드나 마찬가지 일 것 같다...
	for (const sagaName of Object.keys(sagas)) {
		if (Object.prototype.hasOwnProperty.call(composedReducers, sagaName)) continue;
		composedReducers[sagaName] = () => {};
	}

	const slice = createSlice({
		name,
		initialState,
		reducers: composedReducers as ValidateSliceCaseReducers<State, Reducers>,
	});

	const saga = function* () {
		for (const reducerName of Object.keys(sagas)) {
			const action = slice.actions[reducerName];
			if (!action) continue;

			yield takeEvery(action.type, sagas[reducerName]);
		}
	};

	return { ...slice, saga };
};

const { actions } = createSliceAndSaga({
	name: 'a',
	initialState: {
		value: 0,
	},
	reducers: {
		abc(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		bbb(state, action: PayloadAction<string>) {
			console.log(action.payload);
		},
		ccc: {
			reducer(state, action: PayloadAction<boolean>) {
				console.log(action);
			},
			prepare() {
				return { payload: false };
			},
		},
	},
	sagas: {
		*abc(action) {},
		*bbb(action) {},
		*ccc(action) {},
	},
});

export default createSliceAndSaga;
