import { FireStoreDAO } from '@ydkim/server-utils';

export interface IPerson {
	name: string;
	age: number;
}

class PersonFireStoreDAO extends FireStoreDAO<IPerson> {
	constructor() {
		super('person');
	}
}

export const personFireStoreDAO = new PersonFireStoreDAO();
