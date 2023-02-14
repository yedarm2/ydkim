import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../modules/todos';

type TodoListProps = {
	todos: Todo[];
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
	if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

	return (
		<ul>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
			))}
		</ul>
	);
};

export default TodoList;
