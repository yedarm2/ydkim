import { createStore } from 'vuex';

export const createVuexStore = () =>
	createStore({
		state: () => ({}),
		mutations: {},
		actions: {},
		modules: {},
	});

const store = createVuexStore();

export default store;
