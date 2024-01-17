import { CreateClubPayload } from '@ydkim/core-service';

export const getCreateClubPayload = (formData: FormData): CreateClubPayload => ({
	name: formData.get('name') as string,
	schoolId: parseInt(formData.get('schoolId') as string),
	logoImageFile: formData.get('logo') as File,
});
