'use server';
import { CloudStorage } from '@ydkim/server-utils';

import { getSchoolPayload } from './mapper';

export const createSchool = async (formData: FormData) => {
	const payload = getSchoolPayload(formData);
	const cloudStorage = new CloudStorage();
	const uploadedImageUrl = await cloudStorage.uploadFile(payload.schoolImage);
	console.log('uploadedImageUrl', uploadedImageUrl);
};
