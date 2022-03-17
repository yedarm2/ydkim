import { Middleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { pokemonApi } from '../features/pokemon/store/pokemonQueries';
export const sagaMiddleware = createSagaMiddleware();

export const middlewares: Middleware[] =
	process.env.NODE_ENV === 'production'
		? [pokemonApi.middleware, sagaMiddleware]
		: [pokemonApi.middleware, sagaMiddleware, logger];
