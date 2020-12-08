module.exports = {
	plugins: [
		require('stylelint'),
		require('autoprefixer'),
		require('postcss-preset-env'),
		require('postcss-reporter')({
			clearReportedMessages: true,
		}),
	],
};
