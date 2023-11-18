import { SchoolCreatePayload } from '@ydkim/core-service';

export const getSchoolPayload = (formData: FormData): SchoolCreatePayload => {
	return {
		name: formData.get('name') as string,
		imageFile: formData.get('schoolImage') as File,
	};
};
