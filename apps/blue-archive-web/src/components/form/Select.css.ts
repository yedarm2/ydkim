import { globalStyle, style } from '@vanilla-extract/css';

export const customSelectStyle = style({
	position: 'relative',
	width: '250px',
	height: '40px',
	selectors: {
		'&:focus': {
			outline: 'none',
			borderColor: '#333',
		},
	},
});

export const valueWrapperStyle = style({
	width: '100%',
	height: '100%',
	padding: '0 10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	border: '1px solid #aaa',
	borderRadius: '5px',
	selectors: {
		[`${customSelectStyle}:focus > &`]: {
			borderColor: '#333',
		},
	},
});

export const optionListStyle = style({
	margin: 0,
	minWidth: '100%',
	position: 'absolute',
	top: 'calc(100% + 10px)',
	left: 0,
	boxShadow: '0 0 1px #000',
	borderRadius: '5px',
	backgroundColor: '#fff',
	zIndex: 100,
	selectors: {
		[`${valueWrapperStyle}:not(:focus) + &`]: {
			// display: 'none',
		},
	},
});

globalStyle(`${optionListStyle} li`, {
	padding: '0 10px',
	lineHeight: '40px',
});

globalStyle(`${optionListStyle} li.focused`, {
	backgroundColor: '#ddd',
});
