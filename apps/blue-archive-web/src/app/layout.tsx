import '@/assets/styles/styles.scss';
import { Inter } from 'next/font/google';
import { QueryContainer } from '@/components/react-query/QueryClientProvider';
import { RootLayout } from '@/components/common/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: '블루아카이브 계산기',
	description: '블루아카이브 캐릭터 육성을 위한 재료 계산기 페이지 (일단은...)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<QueryContainer>
					<RootLayout>{children}</RootLayout>
				</QueryContainer>
			</body>
		</html>
	);
}
