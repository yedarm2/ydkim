import '../src/styles/scss/global.scss';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { storeWrapper } from '../src/store';
import { AppContext } from '../src/features/common/components/AppContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<AppContext dehydratedState={pageProps.dehydratedState}>
			<Component {...pageProps} />
		</AppContext>
	);
};

export default storeWrapper.withRedux(MyApp);
