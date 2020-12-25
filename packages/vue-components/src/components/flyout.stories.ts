import { action } from '@storybook/addon-actions';
import { YButton, YFlyout } from '@ydkim/vue-components';

export default {
	component: YFlyout,
	title: 'y-flyout',
};

const actions = {
	onClickedOutsideFlyout: action('clickedOutsideFlyout'),
};

const Template = (args, { argTypes }) => ({
	components: {
		YButton,
		YFlyout,
	},
	data: () => ({ isOpeningFlyout: true }),
	methods: {
		onClickedOutsideFlyout() {
			actions.onClickedOutsideFlyout();
			this.isOpeningFlyout = false;
		},
	},
	template: `
		<div style="position: relative;">
			<y-button @click="isOpeningFlyout = true">Open flyout</y-button>
			<y-flyout
				v-if="isOpeningFlyout"
				style="position:absolute; left: 0; top: 100%"
				@clicked-outside-flyout="onClickedOutsideFlyout"
			>
				flyout
			</y-flyout>
		</div>
	`,
});

export const Default = Template.bind({});
