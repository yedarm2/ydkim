import Link from 'next/link';
import { homeMenuListStyle } from './HomeMenu.css';

export const HomeMenu = () => {
	return (
		<nav>
			<ul className={homeMenuListStyle}>
				<li>
					<Link href="/school">학교</Link>
				</li>
				<li>
					<Link href="/club">동아리</Link>
				</li>
			</ul>
		</nav>
	);
};
