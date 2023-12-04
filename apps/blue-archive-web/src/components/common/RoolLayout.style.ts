import { css } from '@/styled-system/css';
import { container } from '@/styled-system/patterns';
import bgKivotos from '@/assets/common/bg_kivotos.jpg';

export const rootLayoutStyle = css({
	minHeight: '100vh',
	padding: '20px 10px',
	bgImage: `url(${bgKivotos.src})`,
});

export const layoutContainer = container({
	boxShadow: '0 0 5px rgba(160 160 160 / 1)',
	minHeight: 'calc(100vh - 40px)',
	bgColor: '#fff',
	borderRadius: '5px',
	padding: '10px',
});
