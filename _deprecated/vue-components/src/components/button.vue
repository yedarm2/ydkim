<template>
	<button :style="colorStyle" class="y-button">
		<slot />
	</button>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'YButton',

	props: {
		color: {
			type: String,
			default: 'black',
		},
	},

	setup(props) {
		const colorStyle = computed(() => ({
			color: props.color,
		}));

		return {
			colorStyle,
		};
	},
});
</script>
