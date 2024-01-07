'use client';
import { PropsWithChildren } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import { classNames } from '@ydkim/browser-utils';

import { rootLayoutStyle, layoutContainer } from './RootLayout.css';

const notoSansFontStyle = Noto_Sans_KR({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={classNames(rootLayoutStyle, notoSansFontStyle.className)}>
			<section className={layoutContainer}>{children}</section>
		</main>
	);
};
