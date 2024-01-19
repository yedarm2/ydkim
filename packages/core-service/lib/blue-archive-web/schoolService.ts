import { SchoolDao, schoolDao } from '@ydkim/core-infra';
import { AssetService, assetService } from '../assetService';
import { CreateSchoolPayload } from './schoolService.interface';

export * from './schoolService.interface';

export class SchoolService {
	schoolDao: SchoolDao;
	assetService: AssetService;

	constructor() {
		this.schoolDao = schoolDao;
		this.assetService = assetService;
	}

	async createSchool(payload: CreateSchoolPayload) {
		const imageFileAsset = await this.assetService.uploadAsset({
			file: payload.imageFile,
			fileName: `${payload.name}_로고`,
			folderPath: 'school_logo',
		});

		return this.schoolDao.create(payload, imageFileAsset.id);
	}

	getSchoolList() {
		return this.schoolDao.getSchoolList();
	}

	getSchoolById(schoolId: number) {
		return this.schoolDao.getSchoolById(schoolId);
	}

	async getSchoolOptionList() {
		const schoolList = await this.getSchoolList();

		return schoolList.map(school => ({
			value: school.id,
			option: school.name,
		}));
	}
}

export const schoolService = new SchoolService();
