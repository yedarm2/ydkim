import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = '김예닮';
export const siteTitle = 'Next.js Sample Website';

const Layout: FC<PropsWithChildren<{ home?: boolean }>> = ({ children, home }) => {
	return (
		<>
			<div className="container">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Learn how to build a ppersonal website using Next.js" />
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle,
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header className="header">
					{home ? (
						<>
							<Image
								priority
								src="/images/profile.jpg"
								className="borderCircle"
								width={144}
								height={144}
								alt={name}
							/>
							<h1 className="heading2X1">{name}</h1>
						</>
					) : (
						<>
							<Link href="/">
								<Image
									priority
									src="/images/profile.jpg"
									className="borderCircle"
									width={108}
									height={108}
									alt={name}
								/>
							</Link>
							<h2 className="headingLg">
								<Link href="/">{name}</Link>
							</h2>
						</>
					)}
				</header>
				<main>{children}</main>
				{!home && (
					<div className="backToHome">
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</div>
			<style jsx>{`
				.container {
					max-width: 36rem;
					padding: 0 1rem;
					margin: 3rem auto 6rem;
				}

				.header {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.backToHome {
					margin: 3rem 0 0;
				}
			`}</style>
			<style jsx>{`
				import '../styles/utils.scss';
			`}</style>
		</>
	);
};

export default Layout;
