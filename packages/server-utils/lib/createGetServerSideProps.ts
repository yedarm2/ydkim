import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { QueryClient, dehydrate, DehydratedState } from '@tanstack/react-query';
import { isBotRequest } from './isBotRequest';

interface CustomGetServerSidePropsContext extends GetServerSidePropsContext {
	isBot: boolean;
	isSSR: boolean;
	queryClient: QueryClient;
}

const isSuccessResult = (result: any): result is { props: any } => {
	const resultProperties = Object.keys(result);
	return resultProperties.includes('props');
};

interface CustomGetServerSideProps<Props> {
	(
		context: CustomGetServerSidePropsContext,
	):
		| void
		| Promise<void>
		| GetServerSidePropsResult<Props>
		| Promise<GetServerSidePropsResult<Props>>;
}

const isSSRRequest = (url: string) => /^\/_next/.test(url);

export const createGetServerSideProps = <Props>(
	getServerSideProps: CustomGetServerSideProps<Props>,
): GetServerSideProps<(Props & { dehydratedState?: DehydratedState }) | { error: any }> => {
	return async context => {
		try {
			const queryClient = new QueryClient({
				defaultOptions: {
					// * 테스트 환경에서는 cacheTime에 Infinity를 넣어야 할 필요가 있다.
					queries: process.env.NODE_ENV === 'test' ? { cacheTime: Infinity } : undefined,
				},
			});
			const queryCache = queryClient.getQueryCache();

			const customContext: CustomGetServerSidePropsContext = {
				...context,
				isBot: isBotRequest(context.req.headers['user-agent']),
				isSSR: isSSRRequest(context.req.url),
				queryClient,
			};

			const getServerSidePropsResult = await getServerSideProps(customContext);
			const dehydratedState = queryCache.getAll().length ? dehydrate(queryClient) : null;

			if (!getServerSidePropsResult) {
				return { props: dehydratedState ? { ...({} as Props), dehydratedState } : ({} as Props) };
			}

			if (!isSuccessResult(getServerSidePropsResult)) {
				return getServerSidePropsResult;
			}

			const props = await getServerSidePropsResult.props;

			return {
				props: dehydratedState ? { ...props, dehydratedState } : props,
			};
		} catch (error) {
			return {
				props: {
					error,
				},
			};
		}
	};
};
