import { Prisma } from '@prisma/client';
import { BaseDao } from '../dao/_baseDao';

export interface RawCreateSchoolPayload {
	name: string;
}

export class SchoolDao extends BaseDao {
	create(schoolData: RawCreateSchoolPayload, imageAssetId: number) {
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
