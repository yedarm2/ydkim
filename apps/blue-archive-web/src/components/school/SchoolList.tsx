import { School, schoolService } from '@ydkim/core-service';
import Link from 'next/link';

interface SchoolListProps {
	schoolList: School[];
}

export const SchoolList = async ({ schoolList }: SchoolListProps) => {
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
