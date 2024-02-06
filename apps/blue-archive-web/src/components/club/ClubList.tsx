import { Club } from '@ydkim/core-service';
import { TableList } from '../common/TableList';

interface ClubListProps {
	clubList: Club[];
}

export const ClubList = async ({ clubList }: ClubListProps) => {
	return (
		<TableList columns={['id', '동아리']} ratios="50px 1fr">
			{clubList.map(club => (
				<TableList.Row href={`/club/${club.id}`}>
					<TableList.Column>{club.id}</TableList.Column>
					<TableList.Column>{club.name}</TableList.Column>
				</TableList.Row>
			))}
			<TableList.AddLinkRow href="/form/club">동아리 추가</TableList.AddLinkRow>
		</TableList>
	);
};
