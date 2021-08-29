import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

const style = css`
	color: hotpink;
`;
console.log(style);

const SomeComponent: FC = ({ children }) => {
	return (
		<div className="test-test" css={style}>
			Some hotpink text.
			{children}
		</div>
	);
};

const anotherStyle = css`
	text-decoration: underline;
`;

const AnotherComponent = () => {
	return <div css={anotherStyle}>Some text with an underline.</div>;
};

const Button = styled.button`
	color: gold;
`;

const P = props => {
	return (
		<p
			css={css`
				margin: 0;
				font-size: 12px;
				line-height: 1.5;
				font-family: 'sans-serif';
				color: #000;
			`}
			{...props}
		/>
	);
};

const ArticleText = props => {
	return (
		<P
			css={css`
				font-size: 14px;
				font-family: 'Georgia, serif';
				color: white;
			`}
			{...props}
		/>
	);
};

const SmallArticleText = props => {
	return (
		<ArticleText
			css={css`
				font-size: 10px;
			`}
			{...props}
		/>
	);
};

export default function Home() {
	return (
		<>
			<SomeComponent>
				<AnotherComponent />
			</SomeComponent>
			<Button type="submit">button</Button>
			<SmallArticleText />
		</>
	);
}
