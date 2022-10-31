import Head from 'next/head';
import { TodoForm } from 'src/todo/views/TodoForm';

export default () => {
	return (
		<>
			<Head>
				<title>todo 생성</title>
			</Head>
			<TodoForm />
		</>
	);
};
