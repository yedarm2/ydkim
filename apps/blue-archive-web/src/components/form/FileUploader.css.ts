import { style } from '@vanilla-extract/css';
import { inputStyle } from './Input.css';

export const fileUploaderStyle = style({
	width: '100px',
	height: '100px',
	[`& > .${inputStyle}`]: {
		display: 'none',
	},
});

export const fileUploaderElementStyle = style({
	display: 'flex',
	width: '100%',
	height: '100%',
	padding: '5px',
	cursor: 'pointer',
	justifyContent: 'center',
	alignItems: 'center',
	border: '2px solid #aaa',
	borderRadius: '3px',
});

export const fileUploaderElementStyleDragging = style({
	borderColor: '#ffa93a',
});

export const fileUploaderDefaultSvgStyle = style({
	width: '100%',
	height: '100%',
	fill: '#aaa',
});