'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { inputStyle } from './Input.css';
import { classNames } from '@ydkim/browser-utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type = 'text', value, ...props }, elementRef) => {
		return (
			<input
				ref={elementRef}
				value={value}
				type={type}
				className={classNames(inputStyle, props.className)}
				{...props}
			/>
		);
	},
);
