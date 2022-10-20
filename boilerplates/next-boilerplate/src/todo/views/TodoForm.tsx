import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';

import { useTodoMutation } from '../hooks/useTodoMutation';

export const TodoForm = () => {
	const router = useRouter();
	const mutateTodo = useTodoMutation();

	const [name, setName] = useState('');
	const [content, setContent] = useState('');

	const createNewTodo: FormEventHandler = async event => {
		event.preventDefault();
		await mutateTodo(name, content);
		router.push('/todo');
	};

	return (
		<div>
			<Link href="/todo">홈으로 이동</Link>
			<form onSubmit={createNewTodo}>
				<input
					type="text"
					placeholder="작업 요약"
					onChange={event => setName(event.target.value)}
				/>
				<input
					type="text"
					placeholder="작업 내용"
					onChange={event => setContent(event.target.value)}
				/>
				<button type="submit">todo 목록 생성</button>
			</form>
		</div>
	);
};
