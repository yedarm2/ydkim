import { createStore } from 'vuex';

export const createVuexStore = () =>
	createStore({
		state: () => ({}),
		getters: {},
		mutations: {},
		actions: {},
		modules: {},
	});

const store = createVuexStore();

export default store;
