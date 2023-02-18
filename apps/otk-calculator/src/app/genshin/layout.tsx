import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="ko">
			<head />
			<body>{children}</body>
		</html>
	);
};

export default Layout;
