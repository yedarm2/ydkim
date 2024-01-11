import { ClubForm } from '@/components/club/ClubForm';
import { NextPageParams } from '@/types/next';
import { schoolService } from '@ydkim/core-service';
import { NotFoundException } from '../errorClass';

const ClubFormPage = ({ params }: NextPageParams<{ schoolId: string }>) => {
	const schoolId = parseInt(params.schoolId);

	if (isNaN(schoolId)) {
		throw new NotFoundException();
	}

	const school = schoolService.getSchoolById(schoolId);
	if (!school) {
		throw new NotFoundException();
	}

	return <ClubForm />;
};

export default ClubFormPage;
