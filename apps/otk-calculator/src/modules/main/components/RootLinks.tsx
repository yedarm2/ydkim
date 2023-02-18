'use client';
import Link from 'next/link';
import styled from '@emotion/styled';

const RootLinksBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLink = styled(Link)`
	display: block;
`;

export const RootLinks = () => {
	return (
		<RootLinksBlock className="links">
			<StyledLink href="/genshin">원신</StyledLink>
			<StyledLink href="/blueArchrve">블루 아카이브 (commin soon...)</StyledLink>
		</RootLinksBlock>
	);
};
