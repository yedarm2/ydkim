import type { ReactNode } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

type SubPageLinkType = 'GENSHIN' | 'BLUE_ARCHIVE';

interface SubPageLinkProps {
	type: SubPageLinkType;
}

interface LinkSource {
	text: ReactNode;
	link: string;
	style: SerializedStyles;
}

const linkSourceMap: Record<SubPageLinkType, LinkSource> = {
	GENSHIN: {
		text: '원신',
		link: '/genshin',
		style: css`
			background-color: #ffc300;
		`,
	},
	BLUE_ARCHIVE: {
		text: (
			<>
				블루 아카이브
				<br />
				(Comming soon...)
			</>
		),
		link: '/blueArchive',
		style: css`
			background-color: #007fff;
		`,
	},
};

const SubPageLinkBlock = styled(Link)`
	display: block;
	width: 300px;
	height: 300px;
	padding: 20px;
	border-radius: 20px;

	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		border: 1px solid #fff;
		border-radius: 15px;

		font-size: 24px;
		text-align: center;
	}
`;

export const SubPageLink = ({ type }: SubPageLinkProps) => {
	const { text, link, style } = linkSourceMap[type];

	return (
		<SubPageLinkBlock href={link} css={style}>
			<div className="inner">{text}</div>
		</SubPageLinkBlock>
	);
};
