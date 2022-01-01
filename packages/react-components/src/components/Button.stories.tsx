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
	return (
		<>
			<FlexWrapper title="색상별">
				{Object.keys(colors).map(color => (
					<Button key={color} {...args} color={color} size="medium">
						styled button
					</Button>
				))}
			</FlexWrapper>
			<FlexWrapper title="사이즈별">
				{Sizes.map(size => (
					<Button key={size} {...args} color="red" size={size}>
						styled button
					</Button>
				))}
			</FlexWrapper>
		</>
	);
};

const Template: ComponentStory<typeof Button> = args => (
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

export const FullSize = args => {
	return (
		<FlexWrapper title="풀 사이즈 버튼">
			{['default', 'reverse', 'pressible'].map(type => (
				<Button key={type} color="red" buttonType={type as 'default'} fullSize css="margin: 0;">
					풀 사이즈 버튼
				</Button>
			))}
		</FlexWrapper>
	);
};
