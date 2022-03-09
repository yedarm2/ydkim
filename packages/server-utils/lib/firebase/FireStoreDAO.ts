import {
	getFirestore,
	Firestore,
	CollectionReference,
	DocumentReference,
	Query,
	WhereFilterOp,
	OrderByDirection,
} from 'firebase-admin/firestore';

import { firebaseApp } from './_app';

type RecordOf<Data> = Data & {
	id: number;
	createdAt: string;
	updatedAt: string;
	removedAt: string;
};

type OperationSchemaOf<Data> = [keyof Data & string, WhereFilterOp, any][];
type OrderSchemaOf<Data> = [keyof Data & string, OrderByDirection][];

type QueryOptionOf<Data> = {
	where?: OperationSchemaOf<Data>;
	order?: OrderSchemaOf<Data>;
	offset?: number;
	limit?: number;
};
type QueryParam<Data> = number | Query | QueryOptionOf<Data>;

const ID_STORE_DOCUMENT_PATH = 'idStore';

const isQueryOption = <Data>(queryOption: any): queryOption is QueryOptionOf<Data> => {
	return (
		!queryOption.get ||
		Object.keys(queryOption).some(key => ['where', 'order', 'offset', 'limit'].includes(key))
	);
};

export class FireStoreDAO<Data extends object, Record = RecordOf<Data>> {
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

		await this.collection.add(dataToCreate);

		return dataToCreate as unknown as Record;
	}

	async selectById(id: number) {
		const querySnapshot = await this.collection
			.where('removedAt', '==', null)
			.where('id', '==', id)
			.get();

		return querySnapshot.empty ? null : (querySnapshot.docs[0].data() as Record);
	}

	async selectAll() {
		const querySnapshot = await this.collection
			.where('removedAt', '==', null)
			.orderBy('id', 'desc')
			.get();

		return !querySnapshot.empty
			? querySnapshot.docs.map(document => document.data() as Record)
			: [];
	}

	private async processQuery(queryParam: QueryParam<Data>) {
		const query =
			typeof queryParam === 'number'
				? this.collection.where('id', '==', queryParam)
				: isQueryOption<Data>(queryParam)
				? await this.processQueryOption(queryParam as QueryOptionOf<Data>)
				: queryParam;

		return query.get();
	}

	private async processQueryOption(queryOption: QueryOptionOf<Data>) {
		let query: Query = null;

		if (queryOption.where) {
			for (const [field, operation, value] of queryOption.where) {
				query = (query ? query : this.collection).where(field, operation, value);
			}
		}

		query = query.where('removedAt', '<', '\uf8ff');

		if (queryOption.order) {
			for (const [field, direction] of queryOption.order) {
				query = (query ? query : this.collection).orderBy(field, direction);
			}
		} else {
			query = (query ? query : this.collection).orderBy('id', 'desc');
		}

		if (queryOption.limit) {
			let limit = queryOption.limit;

			if (queryOption.offset) {
				limit = limit > 0 ? limit + queryOption.offset : limit - queryOption.offset;
			}

			query =
				limit > 0
					? (query ? query : this.collection).limit(limit)
					: (query ? query : this.collection).limitToLast(limit);
		}

		return query;
	}

	select(id: number): Promise<Data[]>;
	select(query: Query): Promise<Data[]>;
	select(queryOption: QueryOptionOf<Data>): Promise<Data[]>;
	async select(arg1: QueryParam<Data>) {
		const querySnapshot = await this.processQuery(arg1);

		return querySnapshot.docs.map(queryDocumentSnapshot => queryDocumentSnapshot.data() as Data);
	}

	update(id: number, arg2: Partial<Data>): Promise<number[]>;
	update(id: number, arg2: (data: Data) => Partial<Data>): Promise<number[]>;
	update(query: Query, arg2: Partial<Data>): Promise<number[]>;
	update(query: Query, arg2: (data: Data) => Partial<Data>): Promise<number[]>;
	update(queryOption: QueryOptionOf<Data>, arg2: Partial<Data>): Promise<number[]>;
	update(queryOption: QueryOptionOf<Data>, arg2: (data: Data) => Partial<Data>): Promise<number[]>;
	async update(arg1: QueryParam<Data>, arg2: Partial<Data> | ((data: Data) => Partial<Data>)) {
		const querySnapshot = await this.processQuery(arg1);
		const now = new Date().toISOString();
		const batch = this.database.batch();

		for (const queryDocumentSnapshot of querySnapshot.docs) {
			const data = queryDocumentSnapshot.data() as Data;
			const ref = queryDocumentSnapshot.ref;
			let valuesToUpdate = typeof arg2 === 'function' ? arg2(data) : arg2;
			valuesToUpdate = Object.keys(valuesToUpdate).reduce((valuesToUpdate, key) => {
				const value = arg2[key];
				if (value !== undefined && value !== null) {
					valuesToUpdate[key] = value;
				}

				return valuesToUpdate;
			}, {});

			batch.update(ref, {
				...valuesToUpdate,
				updatedAt: now,
			});
		}

		await batch.commit();

		return querySnapshot.docs.map(queryDocumentSnapshot => queryDocumentSnapshot.data().id);
	}

	delete(id: number): Promise<number[]>;
	delete(query: Query): Promise<number[]>;
	delete(queryOption: QueryOptionOf<Data>): Promise<number[]>;
	async delete(arg1: QueryParam<Data>) {
		const querySnapshot = await this.processQuery(arg1);
		const now = new Date().toISOString();
		const batch = this.database.batch();

		for (const { ref } of querySnapshot.docs) {
			batch.update(ref, {
				updatedAt: now,
				removedAt: now,
			});
		}

		await batch.commit();

		return querySnapshot.docs.map(queryDocumentSnapshot => queryDocumentSnapshot.data().id);
	}
}
