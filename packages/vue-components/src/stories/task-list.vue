<template>
	<pure-task-list
		:tasks="tasks"
		@archive-task="$attrs.onArchiveTask"
		@pin-task="$attrs.onPinTask"
	/>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PureTaskList from './pure-task-list.vue';

export default {
	components: { PureTaskList },

	methods: mapActions(['archiveTask', 'pinTask']),

	computed: mapState(['tasks']),
};
</script>
