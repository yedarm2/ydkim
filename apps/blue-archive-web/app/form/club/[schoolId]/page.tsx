import { ClubForm } from '@/components/club/ClubForm';
import { NextPageParams } from '@/types/next';
import { schoolService } from '@ydkim/core-service';
import { NotFoundException } from '../errorClass';
import { createClub } from '@/presentations/club';

const ClubFormPage = async ({ params }: NextPageParams<{ schoolId: string }>) => {
	const schoolId = parseInt(params.schoolId);

	if (isNaN(schoolId)) {
		throw new NotFoundException();
	}

	const school = await schoolService.getSchoolById(schoolId);
	if (!school) {
		throw new NotFoundException();
	}

	return <ClubForm school={school} action={createClub} />;
};

export default ClubFormPage;
