import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import isBot from 'isbot';
import { QueryClient, dehydrate, DehydratedState } from 'react-query';

interface CustomGetServerSidePropsContext extends GetServerSidePropsContext {
	isBot: boolean;
	queryClient: QueryClient;
}

const isSuccessResult = (result: any): result is { props: any } => {
	const resultProperties = Object.keys(result);
	return resultProperties.includes('props');
};

interface CustomGetServerSideProps<Props> {
	(context: CustomGetServerSidePropsContext):
		| void
		| Promise<void>
		| GetServerSidePropsResult<Props>
		| Promise<GetServerSidePropsResult<Props>>;
}

export const createGetServerSideProps = <Props>(
	getServerSideProps: CustomGetServerSideProps<Props>,
): GetServerSideProps<(Props & { dehydratedState?: DehydratedState }) | { error: any }> => {
	return async context => {
		try {
			const queryClient = new QueryClient();
			const queryCache = queryClient.getQueryCache();

			const customContext: CustomGetServerSidePropsContext = {
				...context,
				isBot: isBot(context.req.headers['user-agent']),
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
