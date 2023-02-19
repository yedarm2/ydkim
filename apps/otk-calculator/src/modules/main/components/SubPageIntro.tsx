'use client';
import styled from '@emotion/styled';
import { SubPageLink } from './SubPageLink';

const SubPageIntroBlock = styled.main`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;

	/* background-color: #ff4040; */

	.hr {
		width: 1px;
		height: 240px;

		background-color: #aaa;
	}
`;

export const SubPageIntro = () => {
	return (
		<SubPageIntroBlock className="links">
			<SubPageLink type="GENSHIN" />
			<div className="hr" />
			<SubPageLink type="BLUE_ARCHIVE" />
		</SubPageIntroBlock>
	);
};
