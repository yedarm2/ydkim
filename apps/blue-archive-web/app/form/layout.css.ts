import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
	display: 'grid',
	gridTemplateColumns: '100px 1fr',
	gap: '10px',
});
