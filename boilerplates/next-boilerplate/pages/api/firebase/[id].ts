import { createNextRoute } from '@ydkim/server-utils';
import { personFireStoreDAO } from '../../../server/dao';

const getPersonContext = req => ({
	personId: Number(req.query.id),
});

export default createNextRoute({
	async get(req, res) {
		const { personId } = getPersonContext(req);
		const person = await personFireStoreDAO.selectById(personId);

		return {
			data: person,
		};
	},

	async patch(req, res) {
		const { personId } = getPersonContext(req);
		const params = req.body || {};
		await personFireStoreDAO.update(personId, {
			name: params.name,
			age: params.age && Number(params.age),
		});
	},

	async delete(req, res) {
		const { personId } = getPersonContext(req);
		await personFireStoreDAO.delete(personId);
	},
});
