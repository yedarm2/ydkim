import { useMutation } from '@tanstack/react-query';
import { createTodo } from '../api';

export const useTodoMutation = () => {
	const { mutateAsync } = useMutation(createTodo);

	return (jobName: string, jobContent: string) => mutateAsync({ jobName, jobContent });
};
