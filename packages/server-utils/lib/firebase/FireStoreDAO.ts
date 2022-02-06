import {
	getFirestore,
	Firestore,
	CollectionReference,
	DocumentReference,
} from 'firebase-admin/firestore';

import { firebaseApp } from './_app';

type RecordOf<Data> = Data & {
	id: number;
	createdAt: string;
	updatedAt: string;
	removedAt: string;
};

const ID_STORE_DOCUMENT_PATH = 'idStore';

export class FireStoreDAO<Data, Record = RecordOf<Data>> {
	protected database: Firestore;
	protected collection: CollectionReference;
	protected idDocument: DocumentReference;

	constructor(collectionPath: string) {
		const database = getFirestore(firebaseApp);
		const collection = database.collection(collectionPath);

		this.database = database;
		this.collection = collection;
		this.idDocument = database.collection(ID_STORE_DOCUMENT_PATH).doc(collectionPath);
	}

	protected async getIdToCreate() {
		const idSnapshot = await this.idDocument.get();
		const id = idSnapshot.exists && idSnapshot.data().id ? (idSnapshot.data().id as number) : 0;

		const idToUpdate = id + 1;
		await this.idDocument.set({ id: idToUpdate });
		return id;
	}

	async create(data: Data) {
		const newId = await this.getIdToCreate();
		const now = new Date().toISOString();
		const dataToCreate = {
			id: newId,
			...data,
			createdAt: now,
			updatedAt: now,
			removedAt: null as string,
		};

		await this.collection.doc().set(dataToCreate);

		return dataToCreate as unknown as Record;
	}

	async selectById(id: number) {
		const query = this.collection.where('id', '==', id);
		const documentSnapshot = await query.get();

		return documentSnapshot.empty ? null : (documentSnapshot.docs[0].data() as Record);
	}

	async selectAll() {
		const documentSnapshot = await this.collection.orderBy('id', 'desc').get();

		return !documentSnapshot.empty
			? documentSnapshot.docs.map(document => document.data() as Record)
			: [];
	}
}
