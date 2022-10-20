import { api } from '@ydkim/browser-utils';
import { ITodo, TodoPayload } from '@ydkim/core-boilerplate';

api.initializeApi({
	baseURL: '/api',
});

export const getTodoList = () => {
	return api.get<ITodo[]>('/todo').then(response => response.data);
};

export const getTodo = (todoId: number) => {
	return api.get<ITodo>(`/todo/${todoId}`).then(response => response.data);
};

export const createTodo = (payload: TodoPayload) => {
	return api.post('/todo', payload);
};

export const checkTodo = (id: number, checked: boolean) => {
	return api.patch(`/todo/${id}`, { checked });
};
