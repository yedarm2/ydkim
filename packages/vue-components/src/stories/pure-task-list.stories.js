import PureTaskList from './pure-task-list.vue';
import * as TaskStories from './Task.stories';

export default {
	component: PureTaskList,
	title: 'PureTaskList',
	decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
	excludeStories: /.*Data$/,
};

const Template = (args, { argTypes }) => ({
	components: { PureTaskList },
	props: Object.keys(argTypes),
	methods: TaskStories.actionsData,
	template:
		'<pure-task-list v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});
Default.args = {
	tasks: [
		{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
		{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
		{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
		{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
		{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
		{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
	],
	loading: false,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
	tasks: [
		...Default.args.tasks.slice(0, 5),
		{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
	],
	loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
	tasks: [],
	loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
	...Loading.args,
	loading: false,
};
