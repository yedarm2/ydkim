import { Input } from '@/components/form/Input';

const submitSchoolForm = async (formData: FormData) => {
	'use server';
	console.log('formData', formData);
};

const SchoolForm = () => {
	return (
		<form action={submitSchoolForm}>
			<Input name="name" placeholder="학교 이름" />
			<Input type="file" name="학교 파일" placeholder="학교 이미지" />
			<button>생성</button>
		</form>
	);
};

export default SchoolForm;
