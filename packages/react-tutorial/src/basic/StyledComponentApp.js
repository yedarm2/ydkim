import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from '../components/Dialog';

import StyledComponentsButton from './components/StyledComponentsButton';

const AppBlock = styled.div`
	width: 512px;
	margin: 0 auto;
	margin-top: 4rem;
	border: 1px solid black;
	padding: 1rem;
`;

const ButtonGroup = styled.div`
	& + & {
		margin-top: 1rem;
	}
`;

const palette = {
	blue: '#228be6',
	gray: '#496057',
	pink: '#f06595',
};

function StyledComponentApp() {
	const [dialog, setDialog] = useState(false);
	const onClick = () => {
		setDialog(true);
	};
	const onConfirm = () => {
		setDialog(false);
	};
	const onCancel = () => {
		setDialog(false);
	};

	return (
		<ThemeProvider theme={{ palette }}>
			<>
				<AppBlock>
					<StyledComponentsButton color="pink" size="large" onClick={onClick}>
						삭제
					</StyledComponentsButton>
				</AppBlock>
				<Dialog
					title="정말로 삭제하시겠습니까?"
					confirmText="삭제"
					cancelText="취소"
					visible={dialog}
					onConfirm={onConfirm}
					onCancel={onCancel}>
					데이터를 정말로 삭제하시겠습니까?
				</Dialog>
			</>
		</ThemeProvider>
	);
}

export default StyledComponentApp;
