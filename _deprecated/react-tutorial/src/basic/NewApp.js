import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import NewUser from './NewUser';

function NewApp({ user }) {
	return (
		<ErrorBoundary>
			<NewUser />
		</ErrorBoundary>
	);
}

export default NewApp;
