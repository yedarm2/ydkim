import { PropsWithChildren } from 'react';
import { layoutStyle } from './layout.style';

const FormLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className={layoutStyle}>
			<aside>좌측 메뉴</aside>
			<div>{children}</div>
		</div>
	);
};

export default FormLayout;
