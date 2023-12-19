'use client';
import { HTMLInputTypeAttribute } from 'react';
import { SetState } from '@/types/react';
import { inputStyle } from './Input.css';
import { classNames } from '@ydkim/browser-utils';
interface InputProps {
	type?: HTMLInputTypeAttribute;
	name?: string;
	value?: string;
	placeholder?: string;
	setValue?: SetState<string>;
}

export const Input = ({ type = 'text', name, placeholder, value, setValue }: InputProps) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onInput={event => setValue?.((event.target as HTMLInputElement).value)}
			className={classNames(inputStyle)}
		/>
	);
};
