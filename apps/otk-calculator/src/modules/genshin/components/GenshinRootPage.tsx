import Link from 'next/link';
import { GenshinCharacterList } from './GenshinCharacterList';
import { GenshinDataEditorMenu } from './GenshinDataEditorMenu';

export const GenshinRootPage = () => {
	return (
		<main>
			<GenshinCharacterList />
			<GenshinDataEditorMenu />
			<Link href="/">메인 페이지로...</Link>
		</main>
	);
};
