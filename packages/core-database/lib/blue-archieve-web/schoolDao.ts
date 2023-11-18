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

	getSchoolList() {
		return this.prismaClient.school.findMany();
	}

	getSchoolById(schoolId: number) {
		return this.prismaClient.school.findFirst({
			where: { id: schoolId },
			include: { imageAsset: true },
		});
	}
}

export const schoolDao = new SchoolDao();
