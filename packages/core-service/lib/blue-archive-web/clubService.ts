import { ClubDao, clubDao } from '@ydkim/core-infra';
import { AssetService, assetService } from '../assetService';
import { Club, CreateClubPayload } from './clubService.interface';
import { SchoolService, schoolService } from './schoolService';

export * from './clubService.interface';

export class ClubService {
	clubDao: ClubDao;
	schoolService: SchoolService;
	assetService: AssetService;

	constructor() {
		this.clubDao = clubDao;
		this.assetService = assetService;
		this.schoolService = schoolService;
	}

	async createClub(payload: CreateClubPayload): Promise<Club> {
		const school = await this.schoolService.getSchoolById(payload.schoolId);

		const logoImageFileAsset = payload.logoImageFile
			? await this.assetService.uploadAsset({
					file: payload.logoImageFile,
					fileName: `${school.name}_${payload.name}_로고`,
					folderPath: 'club_logo',
				})
			: undefined;

		return this.clubDao.create(payload, logoImageFileAsset.id);
	}
}

export const clubService = new ClubService();
