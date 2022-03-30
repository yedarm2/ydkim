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

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore

	silent: true, // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withPlugins(
	[
		withTM(),
		withImages,
		withBundleAnalyzer,
		nextConfig => withSentryConfig(nextConfig, sentryWebpackPluginOptions),
	],
	{
		reactStrictMode: true,
		experimental: {
			emotion: true,
		},
		env: {
			SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
			SENTRY_DSN: process.env.SENTRY_DSN,
		},
	},
);
