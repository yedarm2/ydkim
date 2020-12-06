const path = require('path');

module.exports = {
	files: ['shims-tsx.d.ts'],
	extends: [
		path.resolve(__dirname, '../../.eslintrc.js'),
	],
};
