import { CreateSchoolPayload } from '@ydkim/core-service';

export const getCreateSchoolPayload = (formData: FormData): CreateSchoolPayload => {
	return {
		name: formData.get('name') as string,
		imageFile: formData.get('schoolImage') as File,
	};
};
