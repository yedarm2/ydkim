module.exports = {
	extends: 'stylelint-config-standard',

	plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-no-unsupported-browser-features'],

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
		'font-weight-notation': 'numeric',
		'function-url-no-scheme-relative': true,
		'function-url-scheme-allowed-list': ['data', '/^http/'],
		'number-max-precision': 1, // * 소수점 제한. 우선 첫째자리까지만 하도록 해보자
		'time-min-milliseconds': 100,
		'unit-disallowed-list': ['cm', 'mm', 'in', 'pt', 'pc'],
		'shorthand-property-no-redundant-values': true,
		'value-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
		// * 어쩌면 추후에 ignore 혹은 룰을 사용하지 않을 것 같기도...
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: [],
			},
		],
		'declaration-no-important': true,
		'selector-max-universal': 0, // * *셀렉터를 완전히 금지시킨다.
		'selector-max-type': 0, // * html tag 셀렉터를 완전히 금지시킨다.
		'selector-no-vendor-prefix': true,
		'selector-pseudo-element-colon-notation': 'double',
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,
		// * at rule에 필수 적인 프로퍼티들을 정의하는 룰
		'at-rule-property-required-list': {
			'font-face': ['font-family', 'src', 'font-display'],
		},
		'no-unknown-animations': true,
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'font-family-name-quotes': 'always-unless-keyword',
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		'number-no-trailing-zeros': true,
		'string-quotes': 'single',
		'unit-case': 'lower',
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['after-custom-property', 'first-nested'],
				ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
			},
		],
		'property-case': 'lower',

		'declaration-bang-space-before': 'always',
		'declaration-bang-space-after': 'never',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': null,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-trailing-semicolon': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-before': 'always',
		'block-opening-brace-space-after': 'always-single-line',
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-type-case': 'lower',
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		// * stylelint-config-standard에 있던 걸 그냥 그대로 옮김.
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment'],
			},
		],
		'media-feature-colon-space-before': 'never',
		'media-feature-colon-space-after': 'always',
		'media-feature-name-case': 'lower',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-before': 'always',
		'media-feature-range-operator-space-after': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-before': 'never',
		'media-query-list-comma-space-after': 'always-single-line',
		// * stylelint-config-standard에 있던 걸 그냥 그대로 옮김.
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment'],
			},
		],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		// * stylelint-config-standard에 있던 걸 그냥 그대로 옮김.
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['stylelint-commands'],
			},
		],
		'comment-whitespace-inside': 'always',
		linebreaks: 'unix',
		'max-empty-lines': 1,
		'no-eol-whitespace': true,
		'no-missing-end-of-source-newline': null,
		'no-empty-first-line': true,
		'order/order': ['dollar-variables', 'custom-properties', 'declarations', 'rules', 'at-rules'],
		'plugin/no-unsupported-browser-features': [
			true,
			{
				severity: 'warning',
				ignore: ['css-fixed'],
			},
		],
		'no-invalid-position-at-import-rule': 'always',
		'no-irregular-whitespace': 'always',
		'selector-attribute-quotes': 'always',
		'scss/dollar-variable-pattern': null,

		// * 14 이후에 추가된 규칙들 13으로 다운그레이드 후에 문제 없을지 확인이 필요.
		'custom-property-no-missing-var-function': true,
		'function-calc-no-unspaced-operator': true,
	},
};
