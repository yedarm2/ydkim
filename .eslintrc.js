module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prefer-const': ['error', {
			destructuring: 'any',
			'ignoreReadBeforeAssign': false,
		}],
		'no-var': 'error',
		'no-new-object': 'error',
		'no-tabs': 'off',
		'object-shorthand': ['error', 'always'],
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
		}],
		'no-shadow': 'off',
		'quote-props': 'error',
		'no-prototype-builtins': 'error',
		'prefer-object-spread': 'error',
		'no-array-constructor': 'error',
		'array-callback-return': 'error',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-destructuring': ['off', {
			array: true,
			object: true,
		}, {
			enforceForRenamedProperties : false,
		}],
		quotes: ['error', 'single'],
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'import/extensions': ['error', 'always', {
			js: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
			msj: 'never',
		}],
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
