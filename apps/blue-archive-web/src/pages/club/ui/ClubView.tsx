import { ClubDetail, School } from '@ydkim/core-service';
import Link from 'next/link';

interface ClubViewProps {
	club: ClubDetail;
}

export const ClubView = ({ club }: ClubViewProps) => {
	return (
		<ul>
			<li>동아리 이름: {club.name}</li>
			{club.logoAsset?.url && (
				<li>
					동아리 로고: <img src={club.logoAsset?.url} alt="" />
				</li>
			)}
			<li>학교 이름: {club.school.name}</li>
			<li>
				학교 로고: <img src={club.school?.imageAsset?.url} alt="" />
			</li>
			<li>
				<Link href="/club">돌아가기</Link>
			</li>
		</ul>
	);
};
