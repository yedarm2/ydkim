import { createNextRouteWithContext } from '@ydkim/server-utils';
import { personFireStoreDAO } from '../../../server/dao';

export default createNextRouteWithContext({
	getContext(req) {
		return {
			personId: Number(req.query.id),
		};
	},

	methods: {
		async get(req, res, { personId }) {
			const person = await personFireStoreDAO.selectById(personId);

			return {
				data: person,
			};
		},

		async patch(req, res, { personId }) {
			const params = req.body || {};
			await personFireStoreDAO.update(personId, {
				name: params.name,
				age: params.age && Number(params.age),
			});
		},

		async delete(req, res, { personId }) {
			await personFireStoreDAO.delete(personId);
		},
	},
});
