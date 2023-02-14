import React from 'react';
import PostContainer from '../container/PostContainer';

export default function PostPage({ match }) {
	const { id } = match.params;
	const postId = parseInt(id);

	return <PostContainer postId={postId} />;
}
