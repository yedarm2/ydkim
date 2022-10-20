import { todoService } from '@ydkim/core-boilerplate';
import { createGetServerSideProps } from '@ydkim/server-utils';
import { QUERY_KEYS } from 'src/todo/constants';
import { TodoView } from 'src/todo/views/TodoView';

export default () => {
	return <TodoView />;
};

export const getServerSideProps = createGetServerSideProps(
	async ({ queryClient, query, isSSR }) => {
		if (!isSSR) {
			const todoId = Number(query.id);
			await queryClient.prefetchQuery(QUERY_KEYS.TODO(todoId), () => todoService.getTodo(todoId));
		}
	},
);
