export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
	() => ({
		inheritAttrs: false,
		template: '<div><story /><div class="overlay-wrapper" /></div>',
	}),
];
