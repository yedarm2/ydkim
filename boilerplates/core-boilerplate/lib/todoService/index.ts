import { Todo, TodoPayload } from './todo.interface';

let todoList: Todo[] = [];

export const getTodoList = async () => todoList;

export const getTodo = async (id: number) => {
	const todoToReturn = todoList.find(todo => todo.id === id);

	if (!todoToReturn) throw new Error('존재하지 않는 Todo의 id 입니다.');
	return todoToReturn;
};

export const createTodo = async (payload: TodoPayload) => {
	const lastTodo = todoList[todoList.length - 1];
	const todoIdToCreate = lastTodo ? lastTodo.id + 1 : 1;

	const todoToCreate: Todo = {
		id: todoIdToCreate,
		isCompleted: false,
		...payload,
	};

	todoList.push(todoToCreate);

	return todoToCreate;
};

export const editTodo = async (id: number, payload: Partial<Omit<Todo, 'id'>>) => {
	let shouldThrowError = true;

	todoList = todoList.map(todo => {
		if (todo.id !== id) return todo;

		shouldThrowError = false;
		return { ...todo, ...payload };
	});

	if (shouldThrowError) throw new Error('존재하지 않는 Todo의 id 입니다.');
};

export const checkTodo = async (id: number, checked: boolean) => {
	await editTodo(id, { isCompleted: checked });
};

export const deleteTodo = async (id: number) => {
	todoList = [...todoList].filter(todo => todo.id !== id);
};
