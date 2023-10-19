import { Article } from '@/components/Article';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Article title="404" backgroundColor="gold">
				404...?
			</Article>
			{children}
		</>
	);
}
