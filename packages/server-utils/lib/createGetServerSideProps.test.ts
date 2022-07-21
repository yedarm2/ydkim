import { createGetServerSideProps } from './createGetServerSideProps';
import { GetServerSidePropsContext } from 'next';
import { isBotRequest } from './isBotRequest';

const BOT_USER_AGENT = 'BOTBOTBOT';

isBotRequest.extend([BOT_USER_AGENT]);

const getMockContext = ({ isBot = false } = {}) =>
	({
		req: {
			headers: {
				'user-agent': isBot ? BOT_USER_AGENT : '',
			},
		},
	} as GetServerSidePropsContext);

const defaultContext = getMockContext();
const botContext = getMockContext({ isBot: true });

describe('createGetServerSideProps', () => {
	describe('기본 테스트', () => {
		test('props 전달', async () => {
			const getServerSideProps1 = createGetServerSideProps(() => {});
			const result1 = await getServerSideProps1(defaultContext);
			expect(result1).toStrictEqual({ props: {} });

			const getServerSideProps2 = createGetServerSideProps(() => ({ props: { data: 2 } }));
			const result2 = await getServerSideProps2(defaultContext);
			expect(result2).toStrictEqual({ props: { data: 2 } });

			const getServerSideProps3 = createGetServerSideProps(async () => ({ props: { data: 3 } }));
			const result3 = await getServerSideProps3(defaultContext);
			expect(result3).toStrictEqual({ props: { data: 3 } });
		});

		test('에러 발생 테스트', async () => {
			const getServerSideProps = createGetServerSideProps(() => {
				throw 'error';
			});

			const result = await getServerSideProps(defaultContext);
			expect(result).toStrictEqual({ props: { error: 'error' } });
		});

		test('redirect, notfound 테스트', async () => {
			const redirectGetServerSideProps = createGetServerSideProps(() => ({
				redirect: {
					permanent: true,
					destination: '/redirect',
				},
			}));

			const redirectResult = await redirectGetServerSideProps(defaultContext);
			expect(redirectResult).toStrictEqual({
				redirect: {
					permanent: true,
					destination: '/redirect',
				},
			});

			const notFoundGetServerSideProps = createGetServerSideProps(() => ({
				notFound: true,
			}));

			const notFoundResult = await notFoundGetServerSideProps(defaultContext);
			expect(notFoundResult).toStrictEqual({
				notFound: true,
			});
		});

		test('react-query 테스트', async () => {
			const getServerSideProps = createGetServerSideProps(({ queryClient }) => {
				queryClient.setQueryData(['test'], 'test');
			});

			const result = await getServerSideProps(defaultContext);

			expect((result as any)?.props?.dehydratedState).toBeTruthy();
		});

		test('bot 테스트', async () => {
			const getServerSideProps = createGetServerSideProps(({ isBot }) => {
				return {
					props: {
						data: isBot ? 1 : 2,
					},
				};
			});

			const normalRequestResult = await getServerSideProps(defaultContext);
			expect(normalRequestResult).toStrictEqual({
				props: {
					data: 2,
				},
			});

			const botRequestResult = await getServerSideProps(botContext);
			expect(botRequestResult).toStrictEqual({
				props: {
					data: 1,
				},
			});
		});
	});
});
