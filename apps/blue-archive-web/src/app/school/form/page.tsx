import { createSchool } from '@/controllers/form';
import { Input } from '@/components/form/Input';

const SchoolForm = () => {
	return (
		<form action={createSchool}>
			<Input name="name" placeholder="학교 이름" />
			<Input type="file" name="schoolImage" placeholder="학교 이미지" />
			<button>생성</button>
		</form>
	);
};

export default SchoolForm;
