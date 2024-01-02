import { createSchool } from '@/controllers/school';
import { Button, Input } from '@/components/form';
import { FileUploader } from '@/components/form/FileUploader';

const SchoolForm = () => {
	return (
		<form action={createSchool}>
			<Input name="name" placeholder="학교 이름" required />
			<FileUploader name="schoolImage" placeholder="학교 이미지" required />
			<Button>생성1</Button>
		</form>
	);
};

export default SchoolForm;
