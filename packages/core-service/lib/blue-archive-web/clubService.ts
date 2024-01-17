import { ClubDao, clubDao } from '@ydkim/core-infra';
import { AssetService, assetService } from '../assetService';
import { CreateClubPayload } from './clubService.interface';
import { SchoolService } from './schoolService';

export * from './clubService.interface';

export class ClubService {
	clubDao: ClubDao;
	schoolService: SchoolService;
	assetService: AssetService;

	constructor() {
		this.clubDao = clubDao;
		this.assetService = assetService;
	}

	async createClub(payload: CreateClubPayload) {
		const school = await this.schoolService.getSchoolById(payload.schoolId);

		const logoImageFileAsset = payload.logoImageFile
			? await this.assetService.uploadAsset({
					file: payload.logoImageFile,
					fileName: `${school.name}_${payload.name}_로고`,
				})
			: undefined;

		return this.clubDao.create(payload, logoImageFileAsset.id);
	}
}

export const clubService = new ClubService();
