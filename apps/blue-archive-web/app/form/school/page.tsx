import { createSchool } from '@/handlers/school';
import { SchoolForm } from '@/pages/school/SchoolForm';

const SchoolFormPage = () => {
	return <SchoolForm action={createSchool} />;
};

export default SchoolFormPage;
