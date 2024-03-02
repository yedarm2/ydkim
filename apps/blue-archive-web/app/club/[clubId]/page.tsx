import { ClubView } from '@/pages/club/ui/ClubView';
import { NextPageParams } from '@/shared/types';
import { clubService } from '@ydkim/core-service';

const ClubViewPage = async ({ params }: NextPageParams<{ clubId: string }>) => {
	const clubId = parseInt(params.clubId);
	const club = await clubService.getClubById(clubId);

	return <ClubView club={club} />;
};

export default ClubViewPage;
