import { FormAction } from '@/shared/types';
import { FormTemplate, FileUploader, Input } from '@/shared/ui';

interface SchoolFormProps {
	action: FormAction;
}

export const SchoolForm = ({ action }: SchoolFormProps) => {
	return (
		<FormTemplate title="학교 생성 페이지" buttonText="생성" action={action}>
			<FormTemplate.Row label="학교 이름">
				<Input name="name" placeholder="학교 이름" required />
			</FormTemplate.Row>
			<FormTemplate.Row label="학교 이미지">
				<FileUploader name="schoolImage" placeholder="학교 이미지" required />
			</FormTemplate.Row>
		</FormTemplate>
	);
};
