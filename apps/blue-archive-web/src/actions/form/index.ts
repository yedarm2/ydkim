'use server';
import { schoolService } from '@ydkim/core-service';
import { getSchoolPayload } from './mapper';

export const createSchool = async (formData: FormData) => {
	const payload = getSchoolPayload(formData);
	await schoolService.createSchool(payload);
};
