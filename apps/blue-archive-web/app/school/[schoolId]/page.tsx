import { SchoolView } from '@/pages/school/SchoolView';
import { clubService, schoolService } from '@ydkim/core-service';

const SchoolViewPage = async (props: { params: { schoolId: string } }) => {
	const { schoolId: schoolIdString } = props.params;
	const schoolId = parseInt(schoolIdString);
	const [school, clubList] = await Promise.all([
		schoolService.getSchoolById(schoolId),
		clubService.getClubsBySchoolId(schoolId),
	]);

	return <SchoolView school={school} clubCount={clubList.length} />;
};

export default SchoolViewPage;
