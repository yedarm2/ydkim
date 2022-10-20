import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTodo } from '../hooks';

export const TodoView = () => {
	const router = useRouter();
	const todoId = Number(router.query.id);
	const { data: todo } = useTodo(todoId);

	if (!todo) return;

	return (
		<div>
			<h2>{todo.jobName}</h2>
			<p>{todo.jobContent}</p>
			<Link href="/todo">
				<a>목록으로</a>
			</Link>
		</div>
	);
};
