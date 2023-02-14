import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('임시 테스트', () => {
	it('임시 테스트', () => {
		expect(true).toBe(true);
	});

	it('컴포넌트 테스트', () => {
		const wrapper = shallowMount(App);

		expect(wrapper.find('#app').exists()).toBe(true);
	});
});
