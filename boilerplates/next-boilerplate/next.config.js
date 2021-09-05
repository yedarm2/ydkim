module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/counter',
				permanent: true,
			},
		];
	},
};
