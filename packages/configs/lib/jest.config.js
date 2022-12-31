module.exports = {
	// TODO: @swc-node/jest로 교체해볼까???
	preset: 'ts-jest',
	// collectCoverage: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '((\\.|/*.)(test))\\.ts?$',
};
