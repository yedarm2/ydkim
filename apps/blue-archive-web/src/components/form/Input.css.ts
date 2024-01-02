import { style } from '@vanilla-extract/css';

export const inputStyle = style({
	color: 'inherit',
	border: '1px solid #aaa',
	padding: '5px 10px',
	borderRadius: '10000px',
	selectors: {
		'&:focus': {
			borderColor: '#aaa',
		},
	},
});
