import { configureStore } from '@reduxjs/toolkit';

import { rootReducer, rootsaga } from './module';
import { middlewares, sagaMiddleware } from './middleware';

export const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares,
});

sagaMiddleware.run(rootsaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
