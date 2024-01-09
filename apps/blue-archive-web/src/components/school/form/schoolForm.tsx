import { createSchool } from '@/controllers/school';
import { Input } from '@/components/form';
import { FileUploader } from '@/components/form/FileUploader';
import { FormTemplate } from '@/components/form/FormTemplate';

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
