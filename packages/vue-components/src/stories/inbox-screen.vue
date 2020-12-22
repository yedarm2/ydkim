<template>
	<pure-inbox-screen :error="error" />
</template>

<script>
import { mapState } from 'vuex';
import PureInboxScreen from './pure-inbox-screen.vue';

export default {
	name: 'InboxScreen',
	components: { PureInboxScreen },
	computed: mapState(['error']),
};
</script>
