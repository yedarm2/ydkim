import type { FC } from 'react';
import Counter from '../src/features/counter/components/Counter';

import { storeWrapper } from '../src/store';
import { counterSingleValueDAO } from 'server/dao';
import { setValue } from '../src/features/counter/store/counterSlice';

const CounterPage: FC = () => {
	return <Counter />;
};

export const getServerSideProps = storeWrapper.getServerSideProps(store => async () => {
	const counter = await counterSingleValueDAO.getValue();
	store.dispatch(setValue(counter));

	return {
		props: {},
	};
});

export default CounterPage;
