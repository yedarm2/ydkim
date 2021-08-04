import React from 'react';
import { Route } from 'react-router-dom';

import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

export default function App() {
	return (
		<>
			<Route path="/" component={PostListPage} exact />
			<Route path="/:id" component={PostPage} />
		</>
	);
}
