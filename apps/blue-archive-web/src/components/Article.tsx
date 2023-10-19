import { PropsWithChildren } from 'react';

interface ArticleProps {
	title: string;
	backgroundColor?: string;
}

export const Article = ({ title, backgroundColor, children }: PropsWithChildren<ArticleProps>) => {
	return (
		<article
			style={{
				backgroundColor,
				minHeight: '150px',
				padding: '10px',
			}}
		>
			<h1>{title}</h1>
			<article>{children}</article>
		</article>
	);
};
