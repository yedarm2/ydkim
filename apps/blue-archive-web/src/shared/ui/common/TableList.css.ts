import { themeVars } from '@/shared/ui';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const tableGridTemplateColumns = createVar();

export const tableStyle = style({
	border: `1px solid ${themeVars.colors.blue}`,
	borderRadius: '10px',
	overflow: 'hidden',
});

export const tableRowStyle = style({
	backgroundColor: themeVars.colors.white,
	selectors: {
		'&.head': {
			backgroundColor: themeVars.colors.blue,
			color: themeVars.colors.white,
		},
		'&:not(.head):hover': {
			backgroundColor: themeVars.colors.lightBlue,
		},
	},
});

globalStyle(`${tableRowStyle} .list-content`, {
	display: 'grid',
	gridTemplateColumns: tableGridTemplateColumns,
	lineHeight: '35px',
});

globalStyle(`${tableRowStyle}:not(:last-child) .list-content`, {
	borderBottom: `1px solid ${themeVars.colors.blue}`,
});

export const tableColumnStyle = style({
	padding: '0 10px',

	selectors: {
		'&:not(:last-child)': {
			borderRight: `1px solid ${themeVars.colors.blue}`,
		},
	},
});

export const tableAddLinkRowStyle = style({
	color: themeVars.colors.blue,
});

globalStyle(`${tableAddLinkRowStyle} ${tableColumnStyle}`, {
	gridColumn: '1 / -1',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

globalStyle(`${tableAddLinkRowStyle} .plus-icon`, {
	margin: '0 10px 0 0',
	fill: 'currentcolor',
});
