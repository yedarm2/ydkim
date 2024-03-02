import { School } from '@ydkim/core-service';
import { TableList } from '../../../components/common/TableList';

interface SchoolListProps {
	schoolList: School[];
}

export const SchoolList = async ({ schoolList }: SchoolListProps) => {
	return (
		<TableList columns={['id', '학교']} ratios="50px 1fr">
			{schoolList.map(school => (
				<TableList.Row href={`/school/${school.id}`}>
					<TableList.Column>{school.id}</TableList.Column>
					<TableList.Column>{school.name}</TableList.Column>
				</TableList.Row>
			))}
			<TableList.AddLinkRow href="/form/school">학교 추가</TableList.AddLinkRow>
		</TableList>
	);
};
