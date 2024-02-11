import { themeVars } from '@/shared/theme.css';
import { style } from '@vanilla-extract/css';

export const cardBoxStyle = style({
	padding: '10px',
	background: themeVars.colors.white,
	boxShadow: `0 0 3px ${themeVars.colors.gray200}`,
	borderRadius: '10px',
});
