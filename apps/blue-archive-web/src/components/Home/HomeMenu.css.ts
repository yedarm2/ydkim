import { globalStyle, style } from '@vanilla-extract/css';

export const homeMenuListStyle = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gridAutoRows: '60px',
});

globalStyle(`${homeMenuListStyle} li`, {
	flex: '0 0 50%',
});

const blueColor = '#128afa';

globalStyle(`${homeMenuListStyle} a`, {
	display: 'block',
	margin: '10px auto',
	border: `1px solid ${blueColor}`,
	borderRadius: '3px',
	width: '150px',
	lineHeight: '40px',
	textAlign: 'center',
	color: blueColor,
	backgroundColor: '#fff',
	transition: 'background-color, color 0.3s, 0.3s',
});

globalStyle(`${homeMenuListStyle} a:hover`, {
	backgroundColor: blueColor,
	color: '#fff',
});
