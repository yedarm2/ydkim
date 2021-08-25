import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

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

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map(filename => ({
		params: {
			id: filename.replace(/\.md$/, ''),
		},
	}));
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
