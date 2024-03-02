import { ClubForm } from '@/pages/club/ui/ClubForm';
import { NextPageParams } from '@/shared/types/next';
import { schoolService } from '@ydkim/core-service';
import { createClub } from '@/presentations/club';

const ClubFormPage = async () => {
	const schoolOptionList = await schoolService.getSchoolOptionList();

	return <ClubForm schoolOptionList={schoolOptionList} action={createClub} />;
};

export default ClubFormPage;
