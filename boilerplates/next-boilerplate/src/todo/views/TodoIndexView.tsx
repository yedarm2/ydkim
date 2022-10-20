import Link from 'next/link';
import { useTodoList } from '../hooks';
import { useToggleTodo } from '../hooks/useToggleTodo';

export const TodoIndexView = () => {
	const { data: todoList } = useTodoList();
	const toggleTodo = useToggleTodo();

	return (
		<div>
			<Link href="/todo/new">
				<a>todo 목록 추가</a>
			</Link>
			<ul>
				{todoList?.map(todoData => (
					<li key={todoData.id} onClick={() => toggleTodo(todoData)}>
						<input type="checkbox" checked={todoData.isCompleted} readOnly />
						{todoData.jobName}: {todoData.jobContent}
					</li>
				))}
			</ul>
		</div>
	);
};
