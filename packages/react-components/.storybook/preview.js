import '@ydkim/styles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { colors, themes } from '../src/variables';
import { AppPaper } from '../src/components';
import { ThemeProvider } from '../src/utils';

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
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for @ydkim/react-components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			// Array of plain string values or MenuItem shape (see below)
			items: ['light', 'dark'],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

const withThemeProvider = (Story, context) => {
	return (
		<ThemeProvider externalTheme={context.globals.theme}>
			<AppPaper>
				<Story {...context} />
			</AppPaper>
		</ThemeProvider>
	);
};

export const decorators = [withThemeProvider];
