import React from 'react';
import { Route } from 'react-router-dom';

import CounterContainer from './container/CounterContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

export default function App() {
	return (
		<>
			<CounterContainer />
			<Route path="/" component={PostListPage} exact />
			<Route path="/:id" component={PostPage} />
		</>
	);
}
