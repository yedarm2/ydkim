import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';
import { FlexWrapper } from './Wrapper';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
	const [value, setValue] = useState('');

	return (
		<FlexWrapper title="인풋">
			<Input {...args} value={value} onInput={setValue} placeholder="placeholder" />
			<Input {...args} value="value" placeholder="placeholder" />
		</FlexWrapper>
	);
};

export const Default = Template.bind({});

export const NormalInput = Template.bind({});
NormalInput.args = {
	isNormalInput: true,
};
