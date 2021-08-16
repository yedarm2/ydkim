module.exports = {
	plugins: {
		'stylelint': {},
		'autoprefixer': {},
		'postcss-preset-env': {},
		// * 무슨 이유에서인지 cannot find module 에러가 발생한다. ㅠㅠ
		// 'postcss-reporter': {
		// 	clearReportedMessages: true,
		// },
	},
};
