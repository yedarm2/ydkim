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

const AllColorSizeButtons = args => {
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

const AllColorSizeTemplate: ComponentStory<typeof Button> = args => (
	<AllColorSizeButtons {...args} />
);

const AllTypeButtons = args => {
	return (
		<FlexWrapper title={args.content || '풀 사이즈 버튼'}>
			{['default', 'reverse', 'pressible'].map(type => (
				<Button key={type} color="red" buttonType={type as 'default'} {...args}>
					{args.content || '풀 사이즈 버튼'}
				</Button>
			))}
		</FlexWrapper>
	);
};

const AllTypeButtonTemplate: ComponentStory<typeof Button> = args => <AllTypeButtons {...args} />;

export const Default = AllColorSizeTemplate.bind({});
Default.args = {
	buttonType: 'default',
};

export const Reverse = AllColorSizeTemplate.bind({});
Reverse.args = {
	buttonType: 'reverse',
};

export const Pressable = AllColorSizeTemplate.bind({});
Pressable.args = {
	buttonType: 'pressible',
};

export const FullSize = AllTypeButtonTemplate.bind({});
FullSize.args = {
	fullSize: true,
};

export const Disabled = AllTypeButtonTemplate.bind({});
Disabled.args = {
	disabled: true,
	fullSize: false,
	content: 'disabled 버튼',
};
