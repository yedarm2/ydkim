'use client';
import { GlobalStyle } from '@/modules/common/components';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="ko">
			<head />
			<body>
				<GlobalStyle />
				{children}
			</body>
		</html>
	);
};

export default Layout;
