import { themeVars } from '@/shared/ui';
import { style } from '@vanilla-extract/css';

export const detailTemplateStyle = style({
	position: 'absolute',
	inset: '0',
	backgroundColor: themeVars.colors.gray400,
});
