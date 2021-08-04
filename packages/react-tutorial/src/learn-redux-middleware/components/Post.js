import React from 'react';

export default function Post({ post }) {
	const { title, body } = post;

	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
}
