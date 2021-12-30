import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, buttonThemeColors } from './Button';
import { FlexWrapper } from './Wrapper';

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

const WholeColorButtons = (...args) => {
	return (
		<FlexWrapper title="버튼">
			{Object.keys(buttonThemeColors).map(theme => (
				<Button key={theme} theme={theme as 'red'} {...args}>
					styled button
				</Button>
			))}
		</FlexWrapper>
	);
};

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
	<WholeColorButtons {...args}>Button Test</WholeColorButtons>
);

export const Default = Template.bind({});
Default.args = {};
