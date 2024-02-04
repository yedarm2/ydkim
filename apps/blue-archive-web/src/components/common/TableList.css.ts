import { createVar, globalStyle, style } from '@vanilla-extract/css';

const blueColor = '#128afa';
const blueLightColor = '#c0e0ff';

export const tableGridTemplateColumns = createVar();

export const tableStyle = style({
	border: `1px solid ${blueColor}`,
	borderRadius: '10px',
	overflow: 'hidden',
});

export const tableRowStyle = style({
	backgroundColor: '#fff',
	selectors: {
		'&.head': {
			backgroundColor: blueColor,
			color: '#fff',
		},
		'&:not(.head):hover': {
			backgroundColor: blueLightColor,
		},
	},
});

globalStyle(`${tableRowStyle} .list-content`, {
	display: 'grid',
	gridTemplateColumns: tableGridTemplateColumns,
	lineHeight: '35px',
});

globalStyle(`${tableRowStyle}:not(:last-child) .list-content`, {
	borderBottom: `1px solid ${blueColor}`,
});

export const tableColumnStyle = style({
	padding: '0 10px',

	selectors: {
		'&:not(:last-child)': {
			borderRight: `1px solid ${blueColor}`,
		},
	},
});
