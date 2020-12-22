<template>
	<div :class="task.state" class="list-item">
		<label class="checkbox">
			<input type="checkbox" :checked="isChecked" disabled name="checked" />
			<span class="checkbox-custom" @click="$emit('archive-task', task.id)" />
		</label>
		<div class="title">
			<input :value="task.title" type="text" readonly placeholder="Input title" />
		</div>

		<div class="actions">
			<a v-if="!isChecked" @click="$emit('pin-task', task.id)">
				<span class="icon-star"></span>
			</a>
		</div>
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

	emits: ['archive-task', 'pin-task'],

	computed: {
		isChecked() {
			return this.task.state === 'TASK_ARCHIVED';
		},
	},
});
</script>
