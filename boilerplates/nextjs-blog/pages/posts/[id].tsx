import { FC } from 'react';
import Head from 'next/head';

import Layout from '../../components/layouts';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post: FC<{ postData: any }> = ({ postData }) => {
	return (
		<>
			<Layout>
				<Head>
					<title>{postData.title}</title>
				</Head>
				<h1 className="headingXl">{postData.title}</h1>
				<div className="lightText">
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<style jsx>{`
					import '../../style/utils.scss';
				`}</style>
			</Layout>
		</>
	);
};

export default Post;

export async function getStaticPaths() {
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}
