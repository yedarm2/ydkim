const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
	},
	transpilePackages: [
		'@ydkim/react-components',
		'@ydkim/browser-utils',
		'@ydkim/hooks',
		'@ydkim/server-utils',
		'@ydkim/utils',
		'@ydkim/core-boilerplate',
		'sanitize.css',
	],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
			},
		],
	},
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withPlugins([withBundleAnalyzer, withVanillaExtract], nextConfig);
