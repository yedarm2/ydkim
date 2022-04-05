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

			if (!isSuccessResult(getServerSidePropsResult)) {
				return getServerSidePropsResult;
			}

			const props = await getServerSidePropsResult.props;

			return {
				props: queryCache.getAll().length
					? { ...props, dehydratedState: dehydrate(queryClient) }
					: props,
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
