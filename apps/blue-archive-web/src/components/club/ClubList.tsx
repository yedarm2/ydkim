import { Club } from '@ydkim/core-service';
import Link from 'next/link';

interface ClubListProps {
	clubList: Club[];
}

export const ClubList = async ({ clubList }: ClubListProps) => {
	return (
		<ul>
			{clubList.map(club => (
				<li key={club.id}>
					{club.id})<Link href={`/club/${club.id}`}>{club.name}</Link>
				</li>
			))}
		</ul>
	);
};
