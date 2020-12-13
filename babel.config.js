module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				bugfixes: true,
				module: 'auto',
				useBuiltIns: 'usabe',
				corejs: 3,
			},
		],
	],
};
