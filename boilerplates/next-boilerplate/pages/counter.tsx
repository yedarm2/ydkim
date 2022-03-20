import type { FC } from 'react';
import Counter from '../src/features/counter/components/Counter';

import { storeWrapper } from '../src/store';
import { counterSingleValueDAO } from 'server/dao';
import { setValue } from '../src/features/counter/store/counterSlice';

import { dehydrate, QueryClient } from 'react-query';

const CounterPage: FC = () => {
	return <Counter />;
};

export const getServerSideProps = storeWrapper.getServerSideProps(store => async () => {
	const counter = await counterSingleValueDAO.getValue();
	store.dispatch(setValue(counter));

	const queryClient = new QueryClient();
	await queryClient.prefetchQuery('counter', () => counterSingleValueDAO.getValue());

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
});

export default CounterPage;
