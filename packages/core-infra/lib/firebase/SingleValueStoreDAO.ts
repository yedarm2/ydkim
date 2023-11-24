import { DocumentReference } from 'firebase-admin/firestore';
import { FireStoreDAO } from './FireStoreDAO';

interface Data<Value> {
	value: Value;
}

export class SingleValueStoreDAO<Value> {
	private document: DocumentReference;

	constructor(documentName: string) {
		const firebaseStoreDAO = new FireStoreDAO<Data<Value>>('singleValueStore');
		this.document = firebaseStoreDAO.getCollection().doc(documentName);
	}

	async getValue() {
		const documentSnapshot = await this.document.get();
		return (documentSnapshot.data() as Data<Value>)?.value;
	}

	async setValue(value: Value) {
		await this.document.set({ value });
	}
}
