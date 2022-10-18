import { useQuery } from '@tanstack/react-query';
import { todoApis } from '../api';

export const useTodoList = () => {
	return useQuery(['todoList'], todoApis.getTodoList);
};
