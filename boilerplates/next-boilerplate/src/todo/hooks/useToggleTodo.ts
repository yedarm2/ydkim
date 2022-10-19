import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '@ydkim/core-boilerplate';
import { checkTodo } from '../api';
import { QUERY_KEYS } from '../constants';

export const useToggleTodo = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation(
		({ id, isCompleted }: ITodo) => {
			return checkTodo(id, !isCompleted);
		},
		{
			onSuccess() {
				queryClient.invalidateQueries(QUERY_KEYS.TODO_LIST());
			},
		},
	);

	return mutate;
};
