'use client';
import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { SetState } from '@/types/react';
import { inputStyle } from './Input.css';
import { classNames } from '@ydkim/browser-utils';

export interface InputProps {
	id?: string;
	type?: HTMLInputTypeAttribute;
	name?: string;
	value?: string;
	placeholder?: string;
	setValue?: SetState<string>;
	setFile?: SetState<File>;
	required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type = 'text', name, placeholder, value, setValue, setFile, ...props }, elementRef) => {
		return (
			<input
				ref={elementRef}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				// onInput={event => setValue?.((event.target as HTMLInputElement).value)}
				onInput={event => {
					setValue?.((event.target as HTMLInputElement).value);

					if (type === 'file') {
						setFile?.((event.target as HTMLInputElement).files?.[0] as File);
					}
				}}
				className={classNames(inputStyle)}
				{...props}
			/>
		);
	},
);
