import { style } from '@vanilla-extract/css';
import bgKivotos from '@/assets/common/bg_kivotos.jpg';

export const rootLayoutStyle = style({
	minHeight: '100vh',
	padding: '20px 10px',
	backgroundImage: `url(${bgKivotos.src})`,
});

export const layoutContainer = style({
	margin: '0 auto',
	boxShadow: '0 0 5px rgba(160 160 160 / 1)',
	minHeight: 'calc(100vh - 40px)',
	backgroundColor: '#fff',
	borderRadius: '5px',
	padding: '10px',
});
