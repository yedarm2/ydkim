import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from './Radio';

import { emotionCommonArgTypes } from '../variables';
import { useState } from 'react';

export default {
	title: 'Components/Radio',
	component: Radio,
	argTypes: {
		...emotionCommonArgTypes,
	},
} as ComponentMeta<typeof Radio>;

const StyleTemplate: ComponentStory<typeof Radio> = args => {
	const values = ['value1', 'value2', 'value3'];
	const [value, setValue] = useState(values[0]);

	return (
		<>
			{values.map(modelValue => (
				<Radio name="radio" value={value} modelValue={modelValue} onChange={setValue}>
					{modelValue}
				</Radio>
			))}
		</>
	);
};

export const Default = StyleTemplate.bind({});
