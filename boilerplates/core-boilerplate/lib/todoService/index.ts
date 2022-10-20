import { ITodo, TodoPayload } from './todo.interface';
import { todoFireStoreDao } from './todoDao';

export const getTodoList = () => todoFireStoreDao.selectAll();

export const getTodo = async (id: number) => {
	const todoToReturn = await todoFireStoreDao.selectById(id);

	if (!todoToReturn) throw new Error('존재하지 않는 Todo의 id 입니다.');
	return todoToReturn;
};

export const createTodo = async (payload: TodoPayload) => {
	const todoToCreate = {
		isCompleted: false,
		...payload,
	};

	await todoFireStoreDao.create(todoToCreate);

	return todoToCreate;
};

export const editTodo = async (id: number, payload: Partial<ITodo>) => {
	const updatedTodoIds = await todoFireStoreDao.update(id, payload);

	if (updatedTodoIds.length === 0) throw new Error('존재하지 않는 Todo의 id 입니다.');
};

export const checkTodo = async (id: number, checked: boolean) => {
	await editTodo(id, { isCompleted: checked });
};

export const deleteTodo = async (id: number) => {
	await todoFireStoreDao.delete(id);
};
