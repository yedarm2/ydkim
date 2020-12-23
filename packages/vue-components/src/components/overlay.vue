<template>
	<teleport :to="teleportSelector">
		<div class="y-overlay" @click="$emit('clicked-overlay')">
			<slot />
		</div>
	</teleport>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { useTeleport } from '@ydkim/composables';

export default defineComponent({
	name: 'YOverlay',

	props: {
		parentSelector: {
			type: String,
			default: '.teleport-wrapper',
		},
	},

	emits: {
		'clicked-overlay': null,
	},

	setup(props) {
		const { parentSelector } = toRefs(props);

		const teleportSelector = useTeleport('div', parentSelector.value);

		return {
			teleportSelector,
		};
	},
});
</script>

<style lang="scss" scoped>
.y-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.4);
}
</style>
