<template>
	<teleport to="body">
		<div :class="overlayClass" class="y-overlay" @click.self="closeOverlay">
			<div :class="slotWrapperClass" class="slot-wrapper" @click.self="closeOverlay">
				<slot />
			</div>
		</div>
	</teleport>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, PropType } from 'vue';

type overlayAlign = 'TOP' | 'CENTER' | 'BOTTOM';

export default defineComponent({
	name: 'YOverlay',

	props: {
		transparent: {
			type: Boolean,
			default: false,
		},

		align: {
			type: String as PropType<overlayAlign>,
			default: 'CENTER',
			validator(align: overlayAlign) {
				return ['TOP', 'CENTER', 'BOTTOM'].includes(align);
			},
		},
	},

	emits: {
		'clicked-overlay': null,
	},

	setup(props, { emit }) {
		const { transparent, align } = toRefs(props);

		const closeOverlay = () => {
			emit('clicked-overlay');
		};

		const overlayClass = computed(() => ({ transparent: transparent.value }));
		const slotWrapperClass = computed(() => `align-${align.value.toLowerCase()}`);

		return {
			overlayClass,
			slotWrapperClass,
			closeOverlay,
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

	padding: 20px 0;

	background-color: rgba(0, 0, 0, 0.4);

	overflow-x: hidden;
	overflow-y: auto;

	&.transparent {
		background-color: transparent;
	}

	.slot-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;

		position: relative;

		// stylelint-disable selector-max-universal
		& > * {
			// stylelint-enable selector-max-universal
			flex: 0 0 auto;
		}

		&.align {
			&-top {
				justify-content: flex-start;
			}

			&-bottom {
				justify-content: flex-end;
			}
		}
	}
}
</style>
