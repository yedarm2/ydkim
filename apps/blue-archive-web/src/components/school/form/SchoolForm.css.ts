import { globalStyle, style } from '@vanilla-extract/css';

export const schoolFormStyle = style({
	padding: '10px 20px',
});

export const schoolFormTitleStyle = style({
	margin: '0 0 10px',
});

export const schoolFormRowStyle = style({
	display: 'flex',
	alignItems: 'center',
	minHeight: '50px',
	borderBottom: '1px solid #aaa',
	selectors: {
		'&:first-of-type': {
			borderTop: '1px solid #aaa',
		},
	},
});

globalStyle(`${schoolFormRowStyle} .title`, {
	width: '120px',
});
globalStyle(`${schoolFormRowStyle} .divider`, {
	width: '1px',
	height: '100px',
	margin: '10px 20px',
	backgroundColor: '#aaa',
});
globalStyle(`${schoolFormRowStyle} .content`, {
	flex: '1 1 auto',
});

globalStyle(`${schoolFormStyle} .submit-button`, {
	margin: '10px 0 0',
	padding: '5px 0',
	width: '90px',
});
