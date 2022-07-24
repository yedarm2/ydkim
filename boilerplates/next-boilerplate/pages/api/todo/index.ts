import { createNextRoute } from '@ydkim/server-utils';
import { TodoPayload, todoService } from '@ydkim/core-boilerplate';

export default createNextRoute({
	async get() {
		const todoList = await todoService.getTodoList();

		return {
			data: todoList,
		};
	},

	async post(req) {
		const payload = req.body as TodoPayload;
		await todoService.createTodo(payload);
	},
});
