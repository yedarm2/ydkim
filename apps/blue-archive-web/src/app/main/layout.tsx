import Link from 'next/link';
import type { PropsWithChildren, ReactNode } from 'react';

export default function MainLayout({
	children,
	special,
}: PropsWithChildren<{ special: ReactNode }>) {
	return (
		<main>
			<ul>
				<li>
					<Link href="/">/</Link>
				</li>
				<li>
					<Link href="/in">/in</Link>
				</li>
				<li>
					<Link href="/main">/main</Link>
				</li>
				<li>
					<Link href="/main/sub1">/main/sub1</Link>
				</li>
				<li>
					<Link href="/main/sub2">/main/sub2</Link>
				</li>
			</ul>
			<div>
				<h1>children</h1>
				{children}
			</div>
			<hr />
			<div>
				<h1>special</h1>
				{special}
			</div>
		</main>
	);
}
