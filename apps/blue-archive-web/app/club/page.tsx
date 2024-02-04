import { ClubList } from '@/components/club/ClubList';
import { clubService } from '@ydkim/core-service';

const ClubViewPage = async () => {
	const clubList = await clubService.getClubList();

	return <ClubList clubList={clubList} />;
};

export default ClubViewPage;
