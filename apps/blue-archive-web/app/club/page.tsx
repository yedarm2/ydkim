import { ClubList } from '@/components/club/ClubList';
import { NextPageParams } from '@/types/next';
import { clubService } from '@ydkim/core-service';

const ClubViewPage = async ({ searchParams }: NextPageParams<unknown, { school?: string }>) => {
	const schoolIdString = searchParams?.school;
	const schoolId = schoolIdString ? parseInt(schoolIdString) : NaN;

	const clubList = await (isNaN(schoolId)
		? clubService.getClubList()
		: clubService.getClubsBySchoolId(schoolId));

	return <ClubList clubList={clubList} schoolId={isNaN(schoolId) ? undefined : schoolId} />;
};

export default ClubViewPage;
