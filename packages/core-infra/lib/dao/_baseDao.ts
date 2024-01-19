import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
	log: ['info', 'warn', 'error', { emit: 'event', level: 'query' }],
});

prismaClient.$on('query', event => {
	console.log('Query: ' + event.query);
	console.log('Params: ' + event.params);
	console.log('Duration: ' + event.duration + 'ms');
});

export class BaseDao {
	protected prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = prismaClient;
	}
}
