import { AssetDao, UploadFilePayload, assetDao } from '@ydkim/core-infra';
import { CloudStorage, cloudStorage } from '@ydkim/core-infra';
import { Asset } from './assetService.interface';

export * from './assetService.interface';

export class AssetService {
	private assetDao: AssetDao;
	private cloudStorage: CloudStorage;

	constructor() {
		this.assetDao = assetDao;
		this.cloudStorage = cloudStorage;
	}

	async uploadAsset(payload: UploadFilePayload): Promise<Asset> {
		const fileUrl = await this.cloudStorage.uploadFile(payload);

		try {
			return await this.assetDao.create({
				url: decodeURIComponent(fileUrl),
			});
		} catch (error) {
			console.error(
				'업로드한 파일 정보 저장 도중에 에러가 발생했습니다. 업로드한 파일을 삭제하겠습니다.',
				error,
			);
			await this.cloudStorage.deleteFile(payload.file.name, payload.folderPath);
			throw error;
		}
	}
}

export const assetService = new AssetService();
