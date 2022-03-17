import { api } from '@ydkim/browser-utils';

export const getCount = () => {
	return api.get<{ data: number }>('/api/counter');
};

export const sendCount = (count: number) => {
	return api.post('/api/counter', {
		value: count,
	});
};
