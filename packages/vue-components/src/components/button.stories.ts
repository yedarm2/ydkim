import { action } from '@storybook/addon-actions';
import YButton from './button.vue';

export default {
	title: 'y-button',
	component: YButton,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClick: action('click'),
};

const Template = (args, { argTypes }) => ({
	components: {
		YButton,
	},
	props: Object.keys(argTypes),
	methods: actionsData,
	template: '<y-button v-bind="$props" @click="onClick">{{ content }}</y-button>',
});

export const Default = Template.bind({});
Default.args = {
	color: 'gold',
	content: 'aaa',
};
