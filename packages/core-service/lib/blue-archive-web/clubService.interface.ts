import { Asset } from '../assetService';

export interface CreateClubPayload {
	name: string;
	schoolId: number;
	logoImageFile?: File;
}

export interface Club {
	id: number;
	name: string;
}

export interface ClubDetail extends Club {
	logoAsset: Asset;
}
