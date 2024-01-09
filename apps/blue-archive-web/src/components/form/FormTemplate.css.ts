import { globalStyle, style } from '@vanilla-extract/css';

export const formStyle = style({
	padding: '10px 20px',
});

globalStyle(`${formStyle} > .title`, {
	margin: '0 0 10px',
});

globalStyle(`${formStyle} .submit-button`, {
	margin: '10px 0 0',
	padding: '5px 0',
	width: '90px',
});

export const formRowStyle = style({
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

globalStyle(`${formRowStyle} .label`, {
	padding: '0 0 0 15px',
	width: '120px',
});
globalStyle(`${formRowStyle} .divider`, {
	width: '1px',
	height: '100px',
	margin: '10px 20px',
	backgroundColor: '#aaa',
});
globalStyle(`${formRowStyle} .content`, {
	flex: '1 1 auto',
});
