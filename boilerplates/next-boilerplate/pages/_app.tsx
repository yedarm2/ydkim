import '../src/styles/scss/global.scss';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import StoreProvider from 'src/features/common/components/StoreProvider';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	);
};

export default MyApp;
