import { createNextRoute, nextApiResponse } from '@ydkim/server-utils';
import { TodoPayload, todoService } from '@ydkim/core-boilerplate';

export default createNextRoute({
	async get(req, res) {
		const todoList = await todoService.getTodoList();

		nextApiResponse.json(res, { data: todoList });
	},

	async post(req) {
		const payload = req.body as TodoPayload;
		await todoService.createTodo(payload);
	},
});
