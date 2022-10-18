import type { FC } from 'react';
import Counter from '../src/features/counter/components/Counter';

import { storeWrapper } from '../src/store';
import { counterSingleValueDAO } from 'server/dao';
import { setValue } from '../src/features/counter/store/counterSlice';

import { createGetServerSideProps } from '@ydkim/server-utils';

const CounterPage: FC = () => {
	return <Counter />;
};

export const getServerSideProps = storeWrapper.getServerSideProps(store =>
	createGetServerSideProps(async ({ queryClient }) => {
		const counter = await counterSingleValueDAO.getValue();
		store.dispatch(setValue(counter));

		await queryClient.prefetchQuery(['counter'], () => counterSingleValueDAO.getValue());

		return {
			props: {},
		};
	}),
);

export default CounterPage;
