import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action) {
	console.info(state, action);
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				users: null,
				error: null,
			};
		case 'SUCCESS':
			return {
				loading: false,
				users: action.data,
				error: null,
			};
		case 'ERROR':
			return {
				loading: false,
				users: null,
				error: action.error,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

function Users() {
	const [{ loading, users, error }, dispatch] = useReducer(reducer, {
		loading: false,
		users: null,
		error: null,
	});

	const fetchUsers = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch({ type: 'SUCCESS', data: response.data });
		} catch (error) {
			dispatch({ type: 'ERROR', error });
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다.</div>;
	if (!users) return null;

	return (
		<>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{user.username} ({user.name})
					</li>
				))}
			</ul>
			<button onClick={fetchUsers}>다시 불러오기</button>
		</>
	);
}

export default Users;
