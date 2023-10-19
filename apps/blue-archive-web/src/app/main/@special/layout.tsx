import { Article } from '@/components/Article';
import { PropsWithChildren } from 'react';

export default function SpecialLayout({ children }: PropsWithChildren) {
	return (
		<Article title="병행 라우트 레이아웃" backgroundColor="aliceblue">
			{children}
		</Article>
	);
}
