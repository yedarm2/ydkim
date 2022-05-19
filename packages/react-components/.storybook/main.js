module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	webpackFinal(config) {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
		});

		return config;
	},
	features: {
		interactionsDebugger: true,
	},
	framework: '@storybook/react',
};
