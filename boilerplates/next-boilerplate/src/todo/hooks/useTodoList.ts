import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '../api';
import { QUERY_KEYS } from '../constants';

export const useTodoList = () => {
	return useQuery(QUERY_KEYS.TODO_LIST(), getTodoList);
};
