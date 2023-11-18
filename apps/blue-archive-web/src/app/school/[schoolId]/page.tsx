import { schoolService } from '@ydkim/core-service';
import Link from 'next/link';

const SchoolForm = async (props: { params: { schoolId: string } }) => {
	const { schoolId: schoolIdString } = props.params;
	const schoolId = parseInt(schoolIdString);
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

export default SchoolForm;
