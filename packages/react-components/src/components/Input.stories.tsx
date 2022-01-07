import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { userEvent } from '@storybook/testing-library';

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
			<Input
				{...args}
				className="input1"
				value={value}
				onInput={setValue}
				placeholder="placeholder"
			/>
			<Input {...args} className="input2" value="value" placeholder="placeholder" />
		</FlexWrapper>
	);
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
	await userEvent.type(canvasElement.querySelector('.input1 input'), 'input test');
};

export const NormalInput = Template.bind({});
NormalInput.args = {
	isNormalInput: true,
};
