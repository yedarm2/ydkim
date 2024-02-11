import { PropsWithChildren } from 'react';
import { detailTemplateStyle } from './DetailTemplate.css';
import { PropsWithClass } from '@/types/react';
import { classNames } from '@ydkim/browser-utils';

interface DetailTemplateProps extends PropsWithChildren, PropsWithClass {}

export const DetailTemplate = ({ className, children }: DetailTemplateProps) => {
	return <div className={classNames(detailTemplateStyle, className)}>{children}</div>;
};
