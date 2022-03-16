const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
	'@ydkim/react-components',
	'@ydkim/browser-utils',
	'@ydkim/hooks',
	'@ydkim/server-utils',
	'@ydkim/utils',
]);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const withImages = require('next-images');

module.exports = withPlugins([withTM(), withImages, withBundleAnalyzer], {
	reactStrictMode: true,
	experimental: {
		emotion: true,
	},
});
