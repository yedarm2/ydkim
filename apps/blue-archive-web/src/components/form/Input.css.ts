import { themeVars } from '@/shared/theme.css';
import { style } from '@vanilla-extract/css';

export const inputStyle = style({
	color: 'inherit',
	border: `1px solid ${themeVars.colors.gray200}`,
	padding: '5px 10px',
	borderRadius: '10000px',
	selectors: {
		'&:focus': {
			borderColor: themeVars.colors.gray200,
		},
	},
});
