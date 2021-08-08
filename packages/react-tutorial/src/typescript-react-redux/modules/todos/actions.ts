import { createAction } from 'typesafe-actions';

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = createAction(ADD_TODO, (text: string) => ({
	id: nextId++,
	text,
}))();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
