import { api } from '@ydkim/browser-utils';
import * as todoApis from './todo';

api.initializeApi({
	baseURL: '/api',
});

export { todoApis };
