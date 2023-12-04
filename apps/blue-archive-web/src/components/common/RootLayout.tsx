'use client';
import { PropsWithChildren } from 'react';

import { layoutContainer } from './RoolLayout.style';
import { rootLayoutStyle } from './RootLayout.css';

export const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={rootLayoutStyle}>
			<section className={layoutContainer}>{children}</section>
		</main>
	);
};
