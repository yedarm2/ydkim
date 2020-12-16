<template>
	<button class="y-button">
		<slot />
	</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'YButton',
});
</script>
