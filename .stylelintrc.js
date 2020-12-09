module.exports = {
	extends: 'stylelint-config-standard',

	plugins: ['stylelint-scss', 'stylelint-order'],

	rules: {
		indentation: 'tab',
		'number-leading-zero': 'always',
		'block-no-empty': true,
		'no-invalid-double-slash-comments': null,
		'alpha-value-notation': 'number',
		'hue-degree-notation': 'angle',
		'color-function-notation': 'legacy',
		'color-named': 'never',
		'color-no-hex': null,
		'length-zero-no-unit': true,
		'font-weight-notation': 'named-where-possible',
		'function-url-no-scheme-relative': true,
		'function-url-scheme-allowed-list': ['data', '/^http/'],
		// 소수점 제한. 우선 첫째자리까지만 하도록 해보자
		'number-max-precision': 1,
		'time-min-milliseconds': 100,
		'unit-disallowed-list': ['cm', 'mm', 'in', 'pt', 'pc'],
		'shorthand-property-no-redundant-values': true,
		'value-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
	},
};
