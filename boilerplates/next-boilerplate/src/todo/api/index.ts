import { api } from '@ydkim/browser-utils';
import { ITodo } from '@ydkim/core-boilerplate';

api.initializeApi({
	baseURL: '/api',
});

export const getTodoList = () => {
	return api.get<ITodo[]>('/todo').then(response => response.data);
};

export const checkTodo = (id: number, checked: boolean) => {
	return api.patch(`/todo/${id}`, { checked });
};
