export const getSchoolPayload = (formData: FormData) => {
	return {
		name: formData.get('name') as string,
		schoolImage: formData.get('schoolImage') as File,
	};
};
