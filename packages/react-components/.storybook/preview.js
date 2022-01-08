// import '@ydkim/styles';

import { colors } from '../src/variables';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		values: Object.entries(colors).map(([name, value]) => ({ name, value })),
	},
};
