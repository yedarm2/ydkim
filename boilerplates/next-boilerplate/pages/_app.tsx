import '../src/styles/scss/global.scss';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { storeWrapper } from '../src/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};

export default storeWrapper.withRedux(MyApp);
