import { todoService } from '@ydkim/core-boilerplate';
import { createGetServerSideProps } from '@ydkim/server-utils';
import Head from 'next/head';
import { QUERY_KEYS } from 'src/todo/constants';
import { TodoIndexView } from 'src/todo/views/TodoIndexView';

const TodoIndex = () => {
	return (
		<>
			<Head>
				<title>todo 리스트</title>
			</Head>
			<TodoIndexView />
		</>
	);
};

export const getServerSideProps = createGetServerSideProps(async ({ queryClient, isSSR }) => {
	if (!isSSR) {
		await queryClient.prefetchQuery(QUERY_KEYS.TODO_LIST(), todoService.getTodoList);
	}
});

export default TodoIndex;
