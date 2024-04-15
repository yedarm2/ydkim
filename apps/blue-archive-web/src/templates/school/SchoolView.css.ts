import { globalStyle, style } from '@vanilla-extract/css';

export const schoolViewStyle = style({
	padding: 10,
});

globalStyle(`${schoolViewStyle} .school-info`, {
	display: 'grid',
	gap: 5,
	gridTemplateColumns: '160px 1fr',
	gridTemplateRows: 'repeat(3, 50px)',
});

globalStyle(`${schoolViewStyle} .logo-box`, {
	gridRow: '1 / -1',
});

globalStyle(`${schoolViewStyle} .list-link-box`, {
	marginTop: 5,
});
