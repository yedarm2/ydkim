'use server';
import { schoolService } from '@ydkim/core-service';
import { getCreateSchoolPayload } from './mapper';
import { redirect } from 'next/navigation';

export const createSchool = async (formData: FormData) => {
	const payload = getCreateSchoolPayload(formData);
	const school = await schoolService.createSchool(payload);
	redirect(`/school/${school.id}`);
};
