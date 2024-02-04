import { createSchool } from '@/presentations/school';
import { Input } from '@/components/form';
import { FormTemplate, FileUploader } from '@/components/form';

export const SchoolForm = () => {
	return (
		<FormTemplate title="학교 생성 페이지" buttonText="생성" action={createSchool}>
			<FormTemplate.Row label="학교 이름">
				<Input name="name" placeholder="학교 이름" required />
			</FormTemplate.Row>
			<FormTemplate.Row label="학교 이미지">
				<FileUploader name="schoolImage" placeholder="학교 이미지" required />
			</FormTemplate.Row>
		</FormTemplate>
	);
};
