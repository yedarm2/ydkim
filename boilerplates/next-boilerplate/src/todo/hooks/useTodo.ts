import { useQuery } from '@tanstack/react-query';
import { getTodo } from '../api';
import { QUERY_KEYS } from '../constants';

export const useTodo = (todoId: number) => {
	return useQuery(QUERY_KEYS.TODO(todoId), () => getTodo(todoId));
};
