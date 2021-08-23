import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '');

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const { data } = matter(fileContents);

		return {
			id,
			...data,
		};
	});

	return allPostsData.sort((dataA, dataB) => {
		const dateA = (dataA as any).date;
		const dateB = (dataB as any).date;

		if (dateA < dateB) return 1;
		if (dateA > dateB) return -1;
		return 0;
	});
}
