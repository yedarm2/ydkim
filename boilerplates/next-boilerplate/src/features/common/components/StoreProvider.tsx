import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';

const StoreProvider: FC = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
