'use client';
import { HTMLInputTypeAttribute } from 'react';
import { SetState } from '@/types/react';
import { cx } from '@/styled-system/css';
import { inputStyle } from './Input.style';

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
			className={cx(inputStyle)}
		/>
	);
};
