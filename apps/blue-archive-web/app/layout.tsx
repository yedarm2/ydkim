import '@/assets/styles/styles.scss';
import { RootLayout } from '@/components/common/RootLayout';
import { PropsWithChildren } from 'react';
import { Providers } from '@/application/providers/Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '블루아카이브 계산기',
	description: '블루아카이브 캐릭터 육성을 위한 재료 계산기 페이지 (일단은...)',
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="ko">
			<body>
				<Providers>
					<RootLayout>{children}</RootLayout>
				</Providers>
			</body>
		</html>
	);
}
