import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	log: ['info', 'warn', 'error', { emit: 'event', level: 'query' }],
});

prisma.$on('query', event => {
	console.log('Query: ' + event.query);
	console.log('Params: ' + event.params);
	console.log('Duration: ' + event.duration + 'ms');
});

(async () => {
	// const users = await prisma.user.findMany({
	// 	include: {
	// 		posts: true,
	// 	},
	// });
	// const posts = await prisma.post.findMany({
	// 	include: {
	// 		author: true,
	// 	},
	// });
	// console.dir(users, { depth: null });
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'John',
	// 		email: 'john@prisma.io',
	// 		posts: {
	// 			create: [
	// 				{
	// 					title: 'Project Sekai',
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// console.log(user);
	// const updatedUser = await prisma.user.updateMany({
	// 	where: {
	// 		name: 'Rovert',
	// 	},
	// 	data: {
	// 		name: 'John',
	// 	},
	// });
	// console.log(updatedUser);
})().finally(() => prisma.$disconnect());
