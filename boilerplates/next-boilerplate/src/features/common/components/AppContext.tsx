import type { FC } from 'react';

import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface AppContextProps {
	dehydratedState?: {
		[key: string]: any;
	};
}

export const AppContext: FC<AppContextProps> = ({ dehydratedState, children }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={dehydratedState}>{children}</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
