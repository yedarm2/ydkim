import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

import { emotionCommonArgTypes } from '../variables';
import { useState } from 'react';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		...emotionCommonArgTypes,
	},
} as ComponentMeta<typeof Checkbox>;

const StyleTemplate: ComponentStory<typeof Checkbox> = args => {
	const [checked, setChecked] = useState(false);

	return (
		<Checkbox {...args} name="checkbox" isChecked={checked} onChange={() => setChecked(!checked)}>
			체크박스
		</Checkbox>
	);
};

export const Default = StyleTemplate.bind({});
