import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppPaper } from './AppPaper';
import { ThemeProvider } from '../utils';

export default {
	title: 'Components/AppPaper',
	component: AppPaper,
	decorators: [
		(Story, context) => {
			return (
				<ThemeProvider externalTheme={context.args.externalTheme}>
					<Story {...context} />
				</ThemeProvider>
			);
		},
	],
} as ComponentMeta<typeof AppPaper>;

const Template: ComponentStory<typeof AppPaper> = args => (
	<AppPaper {...args}>애플리케이션</AppPaper>
);

export const Default = Template.bind({});
Default.args = {
	externalTheme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
	externalTheme: 'dark',
};
