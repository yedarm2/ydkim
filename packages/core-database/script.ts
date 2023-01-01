import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
	// const users = await prisma.user.findMany({
	// 	include: {
	// 		posts: true,
	// 		_count: true,
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
	const updatedUser = await prisma.user.updateMany({
		where: {
			name: 'Rovert',
		},
		data: {
			name: 'John',
		},
	});
	console.log(updatedUser);
})().finally(() => prisma.$disconnect());
