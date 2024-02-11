import { style } from '@vanilla-extract/css';
import bgKivotos from '@/assets/common/bg_kivotos.jpg';
import { themeVars } from '@/shared/theme.css';

export const rootLayoutStyle = style({
	minHeight: '100vh',
	padding: '20px 10px',
	backgroundImage: `url(${bgKivotos.src})`,
});

export const layoutContainer = style({
	position: 'relative',
	maxWidth: '1000px',
	margin: '0 auto',
	boxShadow: '0 0 5px rgba(160 160 160 / 1)',
	minHeight: 'calc(100vh - 40px)',
	backgroundColor: themeVars.colors.white,
	borderRadius: '5px',
	overflow: 'hidden',
});
