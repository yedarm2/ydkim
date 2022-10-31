import Link from 'next/link';
import { useTodoList } from '../hooks';
import { useToggleTodo } from '../hooks/useToggleTodo';

export const TodoIndexView = () => {
	const { data: todoList } = useTodoList();
	const toggleTodo = useToggleTodo();

	return (
		<div>
			<Link href="/todo/new">todo 목록 추가</Link>
			<ul>
				{todoList?.map(todoData => (
					<li key={todoData.id}>
						<input
							type="checkbox"
							checked={todoData.isCompleted}
							readOnly
							onClick={() => toggleTodo(todoData)}
						/>
						<Link href={`/todo/${todoData.id}`}>{todoData.jobName}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
