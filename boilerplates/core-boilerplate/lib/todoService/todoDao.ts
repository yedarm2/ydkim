import { FireStoreDAO } from '@ydkim/server-utils';
import { ITodo } from './todo.interface';

class TodoFireStoreDao extends FireStoreDAO<Omit<ITodo, 'id'>> {
	constructor() {
		super('todo-boilerplate');
	}
}

export const todoFireStoreDao = new TodoFireStoreDao();
