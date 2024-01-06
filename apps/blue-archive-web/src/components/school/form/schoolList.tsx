import { schoolService } from '@ydkim/core-service';
import Link from 'next/link';

export const SchoolList = async () => {
	const schoolList = await schoolService.getSchoolList();

	return (
		<ul>
			{schoolList.map(school => (
				<li key={school.id}>
					{school.id})<Link href={`/school/${school.id}`}>{school.name}</Link>
				</li>
			))}
		</ul>
	);
};
