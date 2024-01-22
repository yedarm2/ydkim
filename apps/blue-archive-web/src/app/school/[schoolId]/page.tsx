import { SchoolView } from '@/components/school/SchoolView';
import { schoolService } from '@ydkim/core-service';

const SchoolViewPage = async (props: { params: { schoolId: string } }) => {
	const { schoolId: schoolIdString } = props.params;
	const schoolId = parseInt(schoolIdString);
	const school = await schoolService.getSchoolById(schoolId);

	return <SchoolView school={school} />;
};

export default SchoolViewPage;
