'use client';
import { PropsWithChildren, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const QueryContainer = ({ children }: PropsWithChildren) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
