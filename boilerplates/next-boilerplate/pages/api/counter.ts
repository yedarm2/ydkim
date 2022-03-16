import { createNextRoute } from '@ydkim/server-utils';
import { counterSingleValueDAO } from '../../server/dao';

export default createNextRoute({
	async get() {
		const value = await counterSingleValueDAO.getValue();

		return {
			data: value,
		};
	},

	async post(req) {
		const { value } = req.body;
		await counterSingleValueDAO.setValue(Number(value) || 0);
	},
});
