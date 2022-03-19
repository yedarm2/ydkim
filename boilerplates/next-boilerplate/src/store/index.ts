import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { rootReducer, rootsaga } from './module';
import { middlewares } from './middleware';

export const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares,
});

const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer: (state: ReturnType<typeof rootReducer>, action) => {
			if (action.type === HYDRATE) {
				return { ...state, ...action.payload };
			}
			return rootReducer(state, action);
		},
		middleware: [sagaMiddleware, ...middlewares],
		devTools: true,
	});

	sagaMiddleware.run(rootsaga);

	return store;
};

export type Store = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export const storeWrapper = createWrapper(makeStore);
