import { createSchool } from '@/controllers/school';
import { Button, Input } from '@/components/form';
import { FileUploader } from '@/components/form/FileUploader';

export const SchoolForm = () => {
	return (
		<form action={createSchool}>
			<h2>학교 생성 페이지</h2>
			<Input name="name" placeholder="학교 이름" required />
			<FileUploader name="schoolImage" placeholder="학교 이미지" required />
			<Button>생성</Button>
		</form>
	);
};
