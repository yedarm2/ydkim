import type { FC, PropsWithChildren } from 'react';

import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface AppContextProps {
	dehydratedState?: {
		[key: string]: any;
	};
}

export const AppContext: FC<PropsWithChildren<AppContextProps>> = ({
	dehydratedState,
	children,
}) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 1000 * 6,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={dehydratedState}>{children}</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
