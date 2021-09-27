import { createStore } from 'src/store';
import { createWrapper } from 'next-redux-wrapper';

const storeWrapper = createWrapper(createStore, { debug: process.env.NODE_ENV === 'production' });

const StoreProvider: FC = storeWrapper.withRedux(({ children }) => {
	return <>{children}</>;
});

export default StoreProvider;
