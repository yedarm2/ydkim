import React, { useContext } from 'react';

import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
	const dispatch = useContext(UserDispatch);

	return (
		<div>
			<b
				style={{
					color: user.active ? 'green' : 'black',
					cursor: 'pointer',
				}}
				onClick={() => dispatch({ type: 'TOGGLE_USER', id: user.id })}>
				{user.username}
			</b>
			<span>({user.email})</span>
			<button onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>삭제</button>
		</div>
	);
});

function UserList({ users }) {
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
