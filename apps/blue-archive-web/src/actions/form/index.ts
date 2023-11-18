'use server';
import { schoolService } from '@ydkim/core-service';
import { getSchoolPayload } from './mapper';
import { redirect } from 'next/navigation';

export const createSchool = async (formData: FormData) => {
	const payload = getSchoolPayload(formData);
	const school = await schoolService.createSchool(payload);
	redirect(`/school/${school.id}`);
};
