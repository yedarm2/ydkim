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
		try {
			const bucketFile = this.bucket.file(file.name);
			const bucketFileStream = bucketFile.createWriteStream();
			const fileArrayBuffer = await file.arrayBuffer();
			const fileBuffer = Buffer.from(fileArrayBuffer);

			const fileUploadPromise = new Promise<string>((resolve, reject) => {
				bucketFileStream.on('error', error => {
					reject(error);
				});

				bucketFileStream.on('finish', () => {
					resolve(getDownloadURL(bucketFile));
				});

				bucketFileStream.end(fileBuffer);
			});

			return await fileUploadPromise;
		} catch (error) {
			console.error('파일 업로드 도중에 에러가 발생했습니다', error);
			throw error;
		}
	}

	async deleteFile(fileName) {
		const bucketFile = this.bucket.file(fileName);
		await bucketFile.delete();
	}
}

export const cloudStorage = new CloudStorage();
