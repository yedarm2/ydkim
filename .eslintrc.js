module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
		'import/resolver': {
			webpack: {
				config: {
					resolve: {
						extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
					}
				},
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
			},
		},
	},
	extends: [
		// '@vue/airbnb',
		// '@vue/typescript/recommended',
		'airbnb-base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'prettier/vue',
		'prettier/react',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
	},
	plugins: [
		'import',
		'jest',
		'@typescript-eslint',
	],
	rules: {
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': ['error'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prefer-const': ['error', {
			destructuring: 'any',
			'ignoreReadBeforeAssign': false,
		}],
		'no-var': 'error',
		'no-new-object': 'error',
		'no-tabs': 'off',
		'object-shorthand': ['error', 'always', {
			avoidQuotes: true,
		}],
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
		}],
		'no-shadow': 'off',
		'quote-props': ['error', 'as-needed'],
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
		'no-eval': 'error',
		'no-useless-escape': 'error',
		'func-names': ['error', 'as-needed'],
		'space-before-function-paren': 'off',
		'space-before-blocks': ['error', 'always'],
		'wrap-iife': ['error', 'inside'],
		'prefer-rest-params': 'error',
		'default-param-last': 'error',
		'no-new-func': 'error',
		'no-param-reassign': ['error', {
			props: true,
			// vuex의 state와 reduce의 acc, e.returnvalue를 위해 수정
			ignorePropertyModificationsFor: ['state', 'acc', 'e', 'event'],
		}],
		'prefer-spread': 'error',
		'function-paren-newline': ['error', 'multiline'],
		'prefer-arrow-callback': 'error',
		'arrow-spacing': 'error',
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],
		// * prettier 때문에 쓰지 못한다. ㅠㅠ
		// 'implicit-arrow-linebreak': ['error', 'beside'],
		'no-useless-constructor': 'error',
		'class-methods-use-this': 'error', // ? 과연 쓸모가 있을까?
		'no-duplicate-imports': 'error',
		'import/no-mutable-exports': 'error',
		'import/prefer-default-export': 'off',
		'import/first': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'import/extensions': ['error', 'always', {
			js: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
			msj: 'never',
		}],
		'generator-star-spacing': ['error', {
			before: false,
			after: true,
		}],
		'no-restricted-syntax': 'off',
		'dot-notation': 'error',
		'prefer-const': ['error', {
			destructuring: 'all',
			ignoreReadBeforeAssign: true,
		}],
		'one-var': ['error', 'never'],
		'no-multi-assign': 'error',
		'no-plusplus': ['error', {
			allowForLoopAfterthoughts: true,
		}],
		'eqeqeq': ['error', 'always'],
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'no-mixed-operators': 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'brace-style': ['error', '1tbs'],
		'no-else-return': 'error',
		'spaced-comment': ['error', 'always'],
		'keyword-spacing': ['error', {
			before: true,
			after: true,
		}],
		'space-infix-ops': ['error', {
			int32Hint: true,
		}],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', {
			max: 1,
			maxEOF: 0,
		}],
		// * 우선 비활성화
		// 'newline-per-chained-call': ['error', {
		// 	ignoreChainWithDepth: 2,
		// }],
		'no-whitespace-before-property': 'error',
		'padded-blocks': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'vue/max-len': ['error', {
			code: 100,
			template: 1000,
			ignoreTrailingComments: true,
			ignoreComments: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
			ignoreRegExpLiterals: true,
		}],
		'block-spacing': ['error', 'always'],
		'comma-spacing': ['error', {
			before: false,
			after: true,
		}],
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		}],
		'no-trailing-spaces': 'error',
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'always'],
		'no-new-wrappers': 'error',
		radix: ['error', 'as-needed'],
		'id-length': ['error', {
			properties: 'always',
			exceptions: ['x', 'y', 'z'],
		}],
		camelcase: ['error', {
			properties: 'always',
		}],
		'new-cap': ['error', {
			newIsCap: true,
			capIsNew: true,
			properties: false,
		}],
		'no-underscore-dangle': ['error', {
			allowAfterThis: true,
			allowAfterSuper: true,
			enforceInMethodNames: false,
		}],
		'linebreak-style': ['error', 'unix'],
		// ? 고민된다. 활성화시킬지...
		// 'vue/component-definition-name-casing': ['error', 'kebab-case'],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			singleline: 3,
			multiline: {
				max: 2,
			},
		}],
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: true,
			optionalDependencies: true,
			peerDependencies: true,
			bundledDependencies: true,
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-var-requires': 'off',
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
