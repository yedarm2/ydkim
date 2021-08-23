import { FC } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layouts';

const FirsrPost: FC = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
};

export default FirsrPost;
