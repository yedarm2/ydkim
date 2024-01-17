import { Prisma } from '@prisma/client';
import { BaseDao } from '../dao/_baseDao';

export { Club } from '@prisma/client';

export interface RawCreateClubPayload {
	name: string;
	schoolId: number;
}

export class ClubDao extends BaseDao {
	create(clubData: RawCreateClubPayload, logoAssetId?: number) {
		return this.prismaClient.club.create({
			data: {
				name: clubData.name,
				schoolId: clubData.schoolId,
				logoAssetId,
			},
		});
	}

	getClubList() {
		return this.prismaClient.club.findMany();
	}

	async getClubOptionList() {
		const clubList = await this.getClubList();

		return clubList.map(club => ({
			value: club.id,
			option: club.name,
		}));
	}

	getClubById(clubId: number) {
		return this.prismaClient.club.findFirst({
			where: { id: clubId },
			include: { logoAsset: true },
		});
	}
}

export const clubDao = new ClubDao();
