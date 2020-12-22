<template>
	<div class="list-items">
		<template v-if="loading">
			<div v-for="n in 6" :key="n" class="loading-item">
				<span class="glow-checkbox" />
				<span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
			</div>
		</template>
		<div v-else-if="isEmpty" class="list-items">
			<div class="wrapper-message">
				<span class="icon-check" />
				<div class="title-message">You have no tasks</div>
				<div class="subtitle-message">Sit back and relax</div>
			</div>
		</div>
		<template v-else>
			<task
				v-for="task in tasksInOrder"
				:key="task.id"
				:task="task"
				@archive-task="$attrs.onArchiveTask"
				@pin-task="$attrs.onPinTask"
			/>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Task from './Task.vue';

export default defineComponent({
	name: 'PureTaskList',

	components: {
		Task,
	},

	props: {
		tasks: {
			type: Array,
			required: true,
			default: () => [],
		},

		loading: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isEmpty() {
			return this.tasks.length === 0;
		},

		tasksInOrder: ({ tasks }) => [
			...tasks.filter(task => task.state === 'TASK_PINNED'),
			...tasks.filter(task => task.state !== 'TASK_PINNED'),
		],
	},

	mounted() {
		console.info('this', this);
	},
});
</script>
