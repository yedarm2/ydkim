import { Asset } from '../assetService';

export interface CreateSchoolPayload {
	name: string;
	imageFile: File;
}

export interface School {
	id: number;
	name: string;
}

export interface SchoolDetail extends School {
	imageAsset: Asset;
}
