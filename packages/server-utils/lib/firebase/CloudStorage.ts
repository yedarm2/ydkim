import { getStorage, Storage, getDownloadURL } from 'firebase-admin/storage';
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
		const bucketFile = this.bucket.file(`test/${file.name}`);
		const bucketFileStream = bucketFile.createWriteStream();
		const fileArrayBuffer = await file.arrayBuffer();
		const fileBuffer = Buffer.from(fileArrayBuffer);

		return new Promise<string>((resolve, reject) => {
			bucketFileStream.on('error', error => {
				reject(error);
			});

			bucketFileStream.on('finish', () => {
				resolve(getDownloadURL(bucketFile));
			});

			bucketFileStream.end(fileBuffer);
		});
	}
}
