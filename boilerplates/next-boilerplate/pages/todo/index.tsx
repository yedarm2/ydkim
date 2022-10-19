import { todoService } from '@ydkim/core-boilerplate';
import { createGetServerSideProps } from '@ydkim/server-utils';
import { QUERY_KEYS } from 'src/todo/constants';
import { TodoIndexView } from 'src/todo/views/TodoIndex';

const TodoIndex = () => {
	return <TodoIndexView />;
};

export const getServerSideProps = createGetServerSideProps(async ({ queryClient }) => {
	await queryClient.prefetchQuery(QUERY_KEYS.TODO_LIST(), todoService.getTodoList);
});

export default TodoIndex;
