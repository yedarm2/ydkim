const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	chainWebpack: config => {
		config.plugin('stylelint').use(StylelintPlugin, [
			{
				files: 'src/**/*.(scss|vue)',
			},
		]);
	},
};
