import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
	log: ['info', 'warn', 'error', { emit: 'event', level: 'query' }],
});

export class BaseDao {
	protected prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = prismaClient;
	}
}
