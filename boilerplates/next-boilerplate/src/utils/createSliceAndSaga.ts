import type {
	SliceCaseReducers,
	CaseReducer,
	CaseReducerWithPrepare,
	PayloadAction,
	AnyAction,
	ValidateSliceCaseReducers,
	Slice,
} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { takeEvery } from 'redux-saga/effects';

type ReducerFunction<Payload = any> = (state: any, action: PayloadAction<Payload>) => any;

type ActionForCaseReducer<Reducer> = Reducer extends ReducerFunction<infer Payload>
	? PayloadAction<Payload>
	: Reducer extends { reducer: ReducerFunction<infer Payload> }
	? PayloadAction<Payload>
	: AnyAction;

type SagasForActions<
	State,
	Reducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
> = {
	[ReducerName in keyof Reducers]: (
		action: ActionForCaseReducer<Reducers[ReducerName]>,
	) => Generator<any, any, any>;
};

interface CreateSliceAndSagaPayload<State, Reducers extends SliceCaseReducers<State>> {
	name: string;
	initialState: State;
	reducers: ValidateSliceCaseReducers<State, Reducers>;
	sagas?: Partial<SagasForActions<State, Reducers>>;
}

interface CreateSliceAndSagaResult<
	State,
	Reducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
> extends Slice<State, Reducers, string> {
	saga: () => Generator<any, any, any>;
}

const createSliceAndSaga = <
	State,
	Reducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
>({
	name = '',
	initialState,
	reducers,
	sagas = {},
}: CreateSliceAndSagaPayload<State, Reducers>): CreateSliceAndSagaResult<State, Reducers> => {
	const slice = createSlice({ name, initialState, reducers });

	const saga = function* () {
		for (const sagaName of Object.keys(sagas)) {
			const action = slice.actions[sagaName];

			yield takeEvery(action.type, sagas[sagaName]);
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
