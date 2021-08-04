const sleep = milliSecond => new Promise(resolve => setTimeout(resolve, milliSecond));

const posts = [
	{
		id: 1,
		title: 'redux post',
		body: 'redux body',
	},
	{
		id: 2,
		title: 'redux-thunk post',
		body: 'redux-thunk body',
	},
	{
		id: 3,
		title: 'redux-saga post',
		body: 'redux-saga body',
	},
];

export const getPosts = async () => {
	await sleep(500);
	return posts;
};

export const getPostById = async id => {
	await sleep(500);
	return posts.find(post => post.id === id);
};
