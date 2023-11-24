import { AssetDao, assetDao } from '@ydkim/core-infra';
import { CloudStorage, cloudStorage } from '@ydkim/server-utils';

export class AssetService {
	private assetDao: AssetDao;
	private cloudStorage: CloudStorage;

	constructor() {
		this.assetDao = assetDao;
		this.cloudStorage = cloudStorage;
	}

	async uploadAsset(file: File, folderPath?: string) {
		const fileUrl = await this.cloudStorage.uploadFile(file, folderPath);

		try {
			return await this.assetDao.create({
				url: fileUrl,
			});
		} catch (error) {
			console.log(
				'업로드한 파일 정보 저장 도중에 에러가 발생했습니다. 업로드한 파일을 삭제하겠습니다.',
				error,
			);
			await this.cloudStorage.deleteFile(file.name, folderPath);
			throw error;
		}
	}
}

export const assetService = new AssetService();
