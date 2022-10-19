import { NextApiRequest } from 'next';

import { createNextRoute } from '@ydkim/server-utils';
import { TodoPayload, todoService } from '@ydkim/core-boilerplate';

const getTodoId = (req: NextApiRequest) => Number(req.query.id as unknown as number);

export default createNextRoute({
	async get(req) {
		const id = getTodoId(req);
		const todo = await todoService.getTodo(id);

		return {
			data: todo,
		};
	},

	async put(req) {
		const id = getTodoId(req);
		const payload = req.body.payload as TodoPayload;

		await todoService.editTodo(id, payload);
	},

	async patch(req) {
		const id = getTodoId(req);
		const checked = req.body.checked as boolean;
		await todoService.checkTodo(id, checked);
	},

	async delete(req) {
		const id = getTodoId(req);
		await todoService.deleteTodo(id);
	},
});
