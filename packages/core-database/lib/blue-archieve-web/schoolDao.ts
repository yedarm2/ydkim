import { PrismaClient, Prisma } from '@prisma/client';
import { BaseDao } from '../_baseDao';

export class SchoolDao extends BaseDao {
	create(schoolData: Prisma.SchoolCreateManyImageAssetInput, imageAssetId: number) {
		return this.prismaClient.school.create({
			data: {
				name: schoolData.name,
				imageAssetId,
			},
		});
	}
}

export const schoolDao = new SchoolDao();
