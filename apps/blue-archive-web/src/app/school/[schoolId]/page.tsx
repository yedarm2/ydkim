import { SchoolView } from '@/components/school/SchoolView';

const SchoolViewPage = async (props: { params: { schoolId: string } }) => {
	const { schoolId: schoolIdString } = props.params;

	return <SchoolView schoolId={parseInt(schoolIdString)} />;
};

export default SchoolViewPage;
