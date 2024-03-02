import { ClubForm } from '@/pages/club/ClubForm';
import { schoolService } from '@ydkim/core-service';
import { createClub } from '@/handlers/club';

const ClubFormPage = async () => {
	const schoolOptionList = await schoolService.getSchoolOptionList();

	return <ClubForm schoolOptionList={schoolOptionList} action={createClub} />;
};

export default ClubFormPage;
