<template>
	<component :is="element" class="y-flyout" @click="onClickedFlyout">
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
	name: 'YFlyout',

	props: {
		element: {
			type: [String, Object],
			default: 'div',
		},
	},

	emits: {
		'clicked-outside-flyout': null,
	},

	setup(props, { emit }) {
		const clickedFlyout = ref(false);

		const onClickedFlyout = () => {
			clickedFlyout.value = true;
		};

		const onClickedOnDocument = () => {
			if (clickedFlyout.value) {
				clickedFlyout.value = false;
				return;
			}

			emit('clicked-outside-flyout');
		};

		onMounted(() => {
			// * 만약 mounted 직후에 onClickedOnDocument을 리스너로 놓으면 document에 click 이벤트가 실행되어서 바로 실행이 된다. ㅠㅠ
			const setUpClickListener = () => {
				document.addEventListener('click', onClickedOnDocument);
			};

			document.addEventListener('click', setUpClickListener, {
				once: true,
			});
		});
		onUnmounted(() => document.removeEventListener('click', onClickedOnDocument));

		return {
			onClickedFlyout,
		};
	},
});
</script>

<style lang="scss" scoped>
.y-flyout {
	z-index: 10000;
}
</style>
