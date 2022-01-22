import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppPaper } from './AppPaper';

export default {
	title: 'Components/AppPaper',
	component: AppPaper,
} as ComponentMeta<typeof AppPaper>;

const Template: ComponentStory<typeof AppPaper> = args => <AppPaper {...args} />;

export const Default = Template.bind({});
Default.args = {
	externalTheme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
	externalTheme: 'dark',
};
