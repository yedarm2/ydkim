'use client';
import { PropsWithChildren } from 'react';

import { layoutContainer, rootLayoutStyle } from './RootLayout.css';

export const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={rootLayoutStyle}>
			<section className={layoutContainer}>{children}</section>
		</main>
	);
};
