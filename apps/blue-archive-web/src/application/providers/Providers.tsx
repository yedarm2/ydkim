'use client';

import { PropsWithChildren } from 'react';
import { TanStackQueryProvider } from './QueryClientProvider';

export const Providers = ({ children }: PropsWithChildren) => {
	return <TanStackQueryProvider>{children}</TanStackQueryProvider>;
};
