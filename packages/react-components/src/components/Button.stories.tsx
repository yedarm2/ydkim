import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';
import { FlexWrapper } from './Wrapper';

import { colors, Sizes, type Color, type Size } from '../variables';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		// theme: {
		// 	control: 'color',
		// 	defaultValue: 'red',
		// },
	},
} as ComponentMeta<typeof Button>;

const WholeColorButtons = args => {
	return Sizes.map(size => (
		<FlexWrapper key={size} title={`버튼 (${size})`}>
			{Object.keys(colors).map(color => (
				<Button key={color} {...args} color={color} size={size}>
					styled button
				</Button>
			))}
		</FlexWrapper>
	));
};

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
	<WholeColorButtons {...args}>Button Test</WholeColorButtons>
);

export const Default = Template.bind({});
Default.args = {
	buttonType: 'default',
};

export const Reverse = Template.bind({});
Reverse.args = {
	buttonType: 'reverse',
};

export const Pressable = Template.bind({});
Pressable.args = {
	buttonType: 'pressible',
};
