import { ClubList } from '@/components/club/ClubList';
import { NextPageParams } from '@/shared/types';
import { clubService } from '@ydkim/core-service';

const ClubListwPage = async ({ searchParams }: NextPageParams<unknown, { school?: string }>) => {
	const schoolIdString = searchParams?.school;
	const schoolId = schoolIdString ? parseInt(schoolIdString) : NaN;
	const hasSchoolId = isNaN(schoolId);

	const clubList = await (hasSchoolId
		? clubService.getClubList()
		: clubService.getClubsBySchoolId(schoolId));

	return <ClubList clubList={clubList} schoolId={hasSchoolId ? undefined : schoolId} />;
};

export default ClubListwPage;
