import { api } from '@ydkim/browser-utils';

export const getTodoList = () => {
	return api.get('/todo');
};
