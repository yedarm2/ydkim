import { action } from '@storybook/addon-actions';
import YButton from './button.vue';

export default {
	title: 'components/y-button',
	component: YButton,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClick: action('click'),
};

const Template = args => ({
	components: {
		YButton,
	},
	props: Object.keys(args),
	methods: actionsData,
	template: '<y-button v-bind="$props" @click="onClick">button</y-button>',
});

export const Default = Template.bind({});
Default.args = {
	color: 'gold',
};

export const Red = Template.bind({});
Red.args = {
	color: 'red',
};
