import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

const FlexWrapperStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	/* justify-content: space-between; */
	position: relative;
	border-radius: 5px;
	border: 1px solid #aaa;
	padding: 15px;
	gap: 10px;

	.title {
		background-color: #fff;
		padding: 0 10px;

		position: absolute;
		left: 10px;
		top: 0;
		transform: translateY(-50%);
		z-index: 10;
	}

	& + & {
		margin-top: 20px;
	}
`;

interface FlexWrapperProps {
	title: string;
}

export const FlexWrapper: FC<PropsWithChildren<FlexWrapperProps>> = ({ title, children }) => {
	return (
		<FlexWrapperStyle>
			<div className="title">{title}</div>
			{children}
		</FlexWrapperStyle>
	);
};
