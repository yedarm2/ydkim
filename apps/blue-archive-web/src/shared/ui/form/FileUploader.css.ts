import { style } from '@vanilla-extract/css';
import { inputStyle } from './Input.css';
import { themeVars } from '@/shared/ui';

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
	border: `2px solid ${themeVars.colors.gray200}`,
	borderRadius: '3px',
	selectors: {
		['&.dragging']: {
			borderColor: themeVars.colors.warn,
		},
		['&.error']: {
			borderColor: themeVars.colors.error,
		},
	},
});

export const fileUploaderDefaultSvgStyle = style({
	width: '100%',
	height: '100%',
	fill: themeVars.colors.gray200,
});
