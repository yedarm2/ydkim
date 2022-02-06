import { createNextRoute } from '@ydkim/server-utils';
import { personFireStoreDAO } from '../../server/dao';

export default createNextRoute({
	async get(req, res) {
		const persons = await personFireStoreDAO.selectAll();
		return {
			data: persons,
		};
	},

	async post(req) {
		const params = req.body || {};
		await personFireStoreDAO.create({
			name: params.name,
			age: Number(params.age),
		});
	},
});
