import { classNames } from '@ydkim/browser-utils';
import { cardBoxStyle } from './CardBox.css';
import { PropsWithChildren } from 'react';
import { PropsWithClass } from '@/shared/types';

interface CardBoxProps extends PropsWithChildren, PropsWithClass {}

export const CardBox = ({ className, children }: CardBoxProps) => {
	return <div className={classNames(cardBoxStyle, className)}>{children}</div>;
};
