import { api } from '@ydkim/browser-utils';
import { ITodo } from '@ydkim/core-boilerplate/lib/todoService/todo.interface';

api.initializeApi({
	baseURL: '/api',
});

export const getTodoList = () => api.get<ITodo[]>('/todo').then(response => response.data);
