import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTodo, useTodoDeleteMutation } from '../hooks';

export const TodoView = () => {
	const router = useRouter();
	const todoId = Number(router.query.id);
	const { data: todo } = useTodo(todoId);
	const deleteTodo = useTodoDeleteMutation(todoId);

	const onClickDeleteButtton = async () => {
		if (!confirm('정말로 삭제하시겠습니까?')) return;

		await deleteTodo();
		router.push('/todo');
	};

	if (!todo) return;

	return (
		<div>
			<h2>{todo.jobName}</h2>
			<p>{todo.jobContent}</p>
			<Link href="/todo">목록으로</Link>
			<button onClick={onClickDeleteButtton}>삭제</button>
		</div>
	);
};
