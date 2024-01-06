import { HTMLAttributes } from 'react';
import { buttonStyle } from './Button.css';
import { classNames } from '@ydkim/browser-utils';

export const Button = ({ className, ...buttonProps }: HTMLAttributes<HTMLButtonElement>) => {
	return <button className={classNames(buttonStyle, className)} {...buttonProps} />;
};

Button.style = buttonStyle;
