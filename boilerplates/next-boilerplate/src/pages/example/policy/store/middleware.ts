import { Middleware } from 'redux';

import { pokemonApi } from '../features/pokemon/store/pokemonQueries';

export const middlewares: Middleware[] = [pokemonApi.middleware];
