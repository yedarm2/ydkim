import { action } from '@storybook/addon-actions';
import { YButton, YOverlay } from '@ydkim/vue-components';

export default {
	title: 'components/y-overlay',
	component: YOverlay,
};

const actions = {
	onClickedOverlay: action('onClickedOverlay'),
};

const Template = args => ({
	components: {
		YButton,
		YOverlay,
	},
	props: Object.keys(args),
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
Default.args = {
	align: 'CENTER',
};

export const Transparent = Template.bind({});
Transparent.args = {
	...Default.args,
	transparent: true,
};

export const Top = Template.bind({});
Top.args = {
	...Default.args,
	align: 'TOP',
};

export const Bottom = Template.bind({});
Bottom.args = {
	...Default.args,
	align: 'BOTTOM',
};
