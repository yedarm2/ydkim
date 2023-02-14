module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal(config) {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
		});

		return config;
	},
};
