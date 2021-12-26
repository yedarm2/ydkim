import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		theme: {
			control: 'color',
			defaultValue: 'red',
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
	<Button {...args}>Button Test</Button>
);

export const Default = Template.bind({});
Default.args = {};
