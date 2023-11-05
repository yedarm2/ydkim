import { getStorage, Storage } from 'firebase-admin/storage';
import { firebaseApp } from './_app';

type Bucket = ReturnType<Storage['bucket']>;

export class CloudStorage {
	protected storage: Storage;
	protected bucket: Bucket;

	constructor() {
		this.storage = getStorage(firebaseApp);
		this.bucket = this.storage.bucket();
	}

	async uploadFile(file: File) {
		const bucketFile = this.bucket.file(file.name);
		const bucketFileStream = this.bucket.file(file.name).createWriteStream();
		const arrayBuffer = await file.arrayBuffer();

		return new Promise<string>((resolve, reject) => {
			bucketFileStream.on('error', error => {
				reject(error);
			});

			bucketFileStream.on('finish', () => {
				resolve(`https://storage.googleapis.com/${this.bucket.name}/${bucketFile.name}`);
			});

			bucketFileStream.end(Buffer.from(arrayBuffer));
		});
	}
}
