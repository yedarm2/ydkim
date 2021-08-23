import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts';
import { getSortedPostsData } from '../lib/posts';

const YourComponent = () => (
	<Image src="/images/profile.jpg" width={144} height={144} alt="Your Name" />
);

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="headingMd padding1px">
				<h2 className="headingLg">Blog</h2>
				<ul className="list">
					{allPostsData.map(({ id, date, title }) => (
						<li className="listItem" key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
			<style jsx>{`
				import '../style/utils.scss;'
			`}</style>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
}
