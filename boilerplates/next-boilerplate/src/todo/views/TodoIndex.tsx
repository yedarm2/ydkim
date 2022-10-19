import { useTodoList } from '../hooks';

export const TodoIndexView = () => {
	const { data: todoList } = useTodoList();

	return (
		<ul>
			{todoList?.map(todoData => (
				<li key={todoData.id}>
					<input type="checkbox" checked={todoData.isCompleted} readOnly />
					{todoData.jobName}: {todoData.jobContent}
				</li>
			))}
		</ul>
	);
};
