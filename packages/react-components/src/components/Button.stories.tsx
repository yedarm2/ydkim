import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlexWrapper } from './Wrapper';
import { Button } from './Button';

import { emotionCommonArgTypes, sizes } from '../variables';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		...emotionCommonArgTypes,
		buttonType: {
			options: ['default', 'reverse', 'pressible'],
			description: '버튼의 형태',
			defaultValue: 'pressible',
			table: { category: 'Style' },
		},
		color: {
			description: '버튼의 색상',
			defaultValue: 'red',
			table: { category: 'Style' },
		},
		size: {
			options: sizes,
			description: '버튼의 크기',
			table: { category: 'Style' },
			control: { type: 'select' },
		},
		fullSize: {
			description: '버튼의 width를 100%로 설정',
			table: { category: 'Style' },
		},
		rounded: {
			description: '버튼을 둥글게 할지 여부 (pressible은 적용되지 않음)',
			table: { category: 'Style' },
		},
		onClick: { action: 'clicked' },
	},
} as ComponentMeta<typeof Button>;

const AllColorSizeButtons = args => {
	return (
		<>
			<FlexWrapper title="사이즈별">
				{sizes.map(size => (
					<Button key={size} {...args} size={size}>
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
				<Button key={type} {...args} buttonType={type as 'default'}>
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

export const RoundedDefault = AllColorSizeTemplate.bind({});
RoundedDefault.args = {
	buttonType: 'default',
	rounded: true,
};

export const Reverse = AllColorSizeTemplate.bind({});
Reverse.args = {
	buttonType: 'reverse',
};

export const RountedReverse = AllColorSizeTemplate.bind({});
RountedReverse.args = {
	buttonType: 'reverse',
	rounded: true,
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
