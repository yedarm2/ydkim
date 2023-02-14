import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncHunk<
	A extends AnyAsyncActionCreator,
	F extends AnyPromiseCreator,
>(asyncActionCreator: A, promiseCreator: F) {
	type Params = Parameters<F>;

	return function thunk(...params: Params) {
		return async (dispatch: Dispatch) => {
			const { request, success, failure } = asyncActionCreator;
			dispatch(request());

			try {
				const result = await promiseCreator(...params);
				dispatch(success(result));
			} catch (error) {
				dispatch(failure(error));
			}
		};
	};
}
