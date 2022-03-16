import { SingleValueStoreDAO } from '@ydkim/server-utils';

class CounterSingleValueDAO extends SingleValueStoreDAO<number> {
	constructor() {
		super('counter_from_boilerplate');
	}

	async getValue() {
		const value = await super.getValue();
		return value || 0;
	}
}

export const counterSingleValueDAO = new CounterSingleValueDAO();
