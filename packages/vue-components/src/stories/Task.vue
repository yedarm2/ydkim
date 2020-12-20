<template>
	<div class="list-item">
		<input type="text" readonly :value="task.title" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Task {
	id: any;
	state: any;
	title: any;
}

export default defineComponent({
	name: 'Task',
	props: {
		task: {
			type: Object as PropType<Task>,
			required: true,
			default: () => ({ id: '', state: '', title: '' }),
			validator: (task: Task) => ['id', 'state', 'title'].every(key => key in task),
		},
	},
});
</script>
