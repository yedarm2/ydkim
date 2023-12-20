import { createSchool } from '@/controllers/school';
import { Button, Input } from '@/components/form';

const SchoolForm = () => {
	return (
		<form action={createSchool}>
			<Input name="name" placeholder="학교 이름" />
			<Input type="file" name="schoolImage" placeholder="학교 이미지" />
			<Button>생성1</Button>
		</form>
	);
};

export default SchoolForm;
