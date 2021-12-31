const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@ydkim/react-components']);
const withImages = require('next-images');

module.exports = withPlugins([withTM(), withImages], {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/counter',
				permanent: true,
			},
		];
	},
});
