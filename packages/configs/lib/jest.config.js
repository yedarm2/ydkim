module.exports = {
	preset: 'ts-jest',
	// collectCoverage: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '((\\.|/*.)(test))\\.ts?$',
};
