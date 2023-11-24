import { SchoolDao, schoolDao } from '@ydkim/core-infra';
import { AssetService, assetService } from '../assetService';
import { SchoolCreatePayload } from './schoolService.interface';

export * from './schoolService.interface';

export class SchoolService {
	schoolDao: SchoolDao;
	assetService: AssetService;

	constructor() {
		this.schoolDao = schoolDao;
		this.assetService = assetService;
	}

	async createSchool(payload: SchoolCreatePayload) {
		const imageFileAsset = await this.assetService.uploadAsset(payload.imageFile, 'school');
		return this.schoolDao.create(payload, imageFileAsset.id);
	}

	getSchoolList() {
		return this.schoolDao.getSchoolList();
	}

	getSchoolById(schoolId: number) {
		return this.schoolDao.getSchoolById(schoolId);
	}
}

export const schoolService = new SchoolService();
