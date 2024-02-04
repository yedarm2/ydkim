'use client';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const TanStackQueryProvider = ({ children }: PropsWithChildren) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
