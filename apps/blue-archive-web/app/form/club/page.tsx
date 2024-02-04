import { ClubForm } from '@/components/club/ClubForm';
import { NextPageParams } from '@/types/next';
import { schoolService } from '@ydkim/core-service';
import { createClub } from '@/controllers/club';

const ClubFormPage = async () => {
	const schoolOptionList = await schoolService.getSchoolOptionList();

	return <ClubForm schoolOptionList={schoolOptionList} action={createClub} />;
};

export default ClubFormPage;
