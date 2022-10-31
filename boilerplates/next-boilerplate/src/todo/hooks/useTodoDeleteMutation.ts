import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '../api';
import { QUERY_KEYS } from '../constants';

export const useTodoDeleteMutation = (todoId: number) => {
	const { mutateAsync } = useMutation(() => deleteTodo(todoId), {
		onSuccess() {
			queryClient.invalidateQueries(QUERY_KEYS.TODO_LIST());
		},
	});
	const queryClient = useQueryClient();

	return () => mutateAsync();
};
