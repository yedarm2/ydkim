import { SchoolList } from '@/pages/school/SchoolList';
import { schoolService } from '@ydkim/core-service';

const SchoolListPage = async () => {
	const schoolList = await schoolService.getSchoolList();

	return <SchoolList schoolList={schoolList} />;
};

export default SchoolListPage;
