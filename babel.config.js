module.exports = {
	plugins: [
		'@babel/plugin-transform-runtime',
	],
	presets: [
		[
			'@babel/preset-env',
			{
				bugfixes: true,
				module: 'auto',
				useBuiltIns: 'usage',
				corejs: 3,
			},
		],
	],
};
