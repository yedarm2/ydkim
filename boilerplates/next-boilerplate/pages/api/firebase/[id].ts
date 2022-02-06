import { createNextRoute } from '@ydkim/server-utils';
import { personFireStoreDAO } from '../../../server/dao';

export default createNextRoute({
	async get(req, res) {
		const person = await personFireStoreDAO.selectById(Number(req.query.id));

		return {
			data: person,
		};
	},
});
