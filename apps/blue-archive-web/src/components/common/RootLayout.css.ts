import { style } from '@vanilla-extract/css';
import bgKivotos from '@/assets/common/bg_kivotos.jpg';

export const rootLayoutStyle = style({
	minHeight: '100vh',
	padding: '20px 10px',
	backgroundImage: `url(${bgKivotos.src})`,
});
