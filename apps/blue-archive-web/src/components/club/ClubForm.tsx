import { School } from '@ydkim/core-infra';
import { Option } from '@/types/common';
import { FormTemplate, FileUploader, Select } from '@/components/form';
import { Input } from '../form';
import { FormAction } from '@/types/next';

interface ClubFormProps {
	school?: School;
	schoolOptionList?: Option[];
	action: FormAction;
}

export const ClubForm = ({ school, schoolOptionList, action }: ClubFormProps) => {
	return (
		<FormTemplate title="동아리 생성" buttonText="생성" action={action}>
			<FormTemplate.Row label="학교">
				{schoolOptionList && <Select name="schoolId" optionList={schoolOptionList} />}
				{school && (
					<>
						<Input type="hidden" name="schoolId" value={school.id} />
						<span>{school.name}</span>
					</>
				)}
			</FormTemplate.Row>
			<FormTemplate.Row label="동아리 이름">
				<Input name="name" />
			</FormTemplate.Row>
			<FormTemplate.Row label="로고">
				<FileUploader name="logo" />
			</FormTemplate.Row>
		</FormTemplate>
	);
};
