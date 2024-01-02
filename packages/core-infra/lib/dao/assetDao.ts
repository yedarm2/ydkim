import { PrismaClient, Prisma } from '@prisma/client';
import { BaseDao } from './_baseDao';

export class AssetDao extends BaseDao {
	create(assetData: Prisma.AssetCreateInput) {
		return this.prismaClient.asset.create({
			data: assetData,
		});
	}
}

export const assetDao = new AssetDao();
