import { schoolService } from '@ydkim/core-service';
import Link from 'next/link';

interface SchoolViewProps {
	schoolId: number;
}

export const SchoolView = async ({ schoolId }: SchoolViewProps) => {
	const school = await schoolService.getSchoolById(schoolId);

	return (
		<ul>
			<li>학교 이름: {school?.name}</li>
			<li>
				학교 로고: <img src={school?.imageAsset.url} alt="" />
			</li>
			<li>
				<Link href="/school">돌아가기</Link>
			</li>
		</ul>
	);
};
