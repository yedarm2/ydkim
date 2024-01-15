import { School } from '@ydkim/core-infra';
import { Option } from '@/types/common';
import { FormTemplate } from '@/components/form/FormTemplate';
import { Input } from '../form';
import { FileUploader } from '@/components/form/FileUploader';
import { FormHTMLAttributes } from 'react';

interface ClubFormProps {
	school?: School;
	schoolOptionList?: Option[];
	action: FormHTMLAttributes<HTMLFormElement>['action'];
}

export const ClubForm = ({ school, schoolOptionList, action }: ClubFormProps) => {
	return (
		<FormTemplate title="동아리 생성" buttonText="생성" action={action}>
			{school && <Input type="hidden" name="school" value={school.id} />}
			<FormTemplate.Row label="동아리 이름">
				<Input name="clubName" />
			</FormTemplate.Row>
			<FormTemplate.Row label="로고">
				<FileUploader name="logo" />
			</FormTemplate.Row>
		</FormTemplate>
	);
};
