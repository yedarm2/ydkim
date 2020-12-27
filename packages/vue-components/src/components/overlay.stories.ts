import { action } from '@storybook/addon-actions';
import { YButton, YOverlay } from '@ydkim/vue-components';

export default {
	component: YOverlay,
	title: 'y-overlay',
};

const actions = {
	onClickedOverlay: action('onClickedOverlay'),
};

const Template = (args, { argTypes }) => ({
	components: {
		YButton,
		YOverlay,
	},
	props: Object.keys(argTypes),
	data: () => ({ isOpeningOverlay: true }),
	methods: {
		onClickedOverlay() {
			actions.onClickedOverlay();
			this.isOpeningOverlay = false;
		},
	},
	template: `
		<div style="position: relative;">
			<y-button @click="isOpeningOverlay = true">Open overlay</y-button>
			<y-overlay
				v-if="isOpeningOverlay"
				v-bind="$props"
				@clicked-overlay="onClickedOverlay"
			>
				overlay
			</y-overlay>
		</div>
	`,
});

export const Default = Template.bind({});

export const Transparent = Template.bind({});
Transparent.args = {
	transparent: true,
};

export const Top = Template.bind({});
Top.args = {
	align: 'TOP',
};

export const Bottom = Template.bind({});
Bottom.args = {
	align: 'BOTTOM',
};
