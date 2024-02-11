import { Asset } from '../assetService';
import { SchoolDetail } from './schoolService.interface';

export interface CreateClubPayload {
	name: string;
	schoolId: number;
	logoImageFile?: File;
}

export interface Club {
	id: number;
	name: string;
	schoolId: number;
}

export interface ClubDetail extends Club {
	logoAsset?: Asset;
	school: SchoolDetail;
}
