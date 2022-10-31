import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTodo } from '../hooks';

export const TodoView = () => {
	const router = useRouter();
	const todoId = Number(router.query.id);
	const { data: todo } = useTodo(todoId);

	if (!todo) return;

	return (
		<Head>
			<title>todo: {todo.jobName}</title>
		</Head>
	);
};
