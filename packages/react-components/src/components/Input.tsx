import styled from '@emotion/styled';

import { FC, FormEvent, HTMLInputTypeAttribute, useState } from 'react';
import { css } from '@emotion/react';

import { classNames, ClassnamesArgument } from '@ydkim/utils';
import { Color, colors } from '../variables';
import { ElementStyle } from '../types';

interface OnInputHandler {
	(value: string, event?: FormEvent<HTMLInputElement>): void;
}

export interface InputProps {
	value: string;
	onInput: OnInputHandler;

	type?: Exclude<HTMLInputTypeAttribute, 'checkbox' | 'radio'>;
	placeholder?: string;
	isNormalInput?: boolean;
	color?: Exclude<Color, 'gray'>;
	className?: ClassnamesArgument;
}

export const Input: FC<InputProps> = props => {
	const { type, value, placeholder, isNormalInput, className, color } = props;
	const { isActive, isFocused, onFocus, onBlur, emitOnInput } = useInput(props);
	const classString = className ? classNames(className) : '';

	return (
		<InputWrapper isFocused={isFocused} isActive={isActive} color={color} className={classString}>
			{!isNormalInput && placeholder && <span className="placeholder">{placeholder}</span>}
			<input
				type={type}
				value={value}
				onInput={emitOnInput}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={isNormalInput && placeholder}
				className="input"
			/>
		</InputWrapper>
	);
};

Input.defaultProps = {
	type: 'text',
	color: 'blue',
};

const useInput = (props: InputProps) => {
	const { value, onInput } = props;

	const [isFocused, setInputFocus] = useState(false);
	const isActive = value !== '' || isFocused;

	const onFocus = () => {
		setInputFocus(true);
	};

	const onBlur = () => {
		setInputFocus(false);
	};

	const emitOnInput = (event: FormEvent<HTMLInputElement>) => {
		onInput((event.target as HTMLInputElement).value, event);
	};

	return {
		isActive,
		isFocused,
		onFocus,
		onBlur,
		emitOnInput,
	};
};

interface InputWrapperProps {
	isFocused: boolean;
	isActive: boolean;
	color: Color;
}

const InputWrapper = styled.div<InputWrapperProps>`
	position: relative;

	.placeholder {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%) scale(1);
		background: #fff;
		padding: 0 10px;

		transition: top, transform, color 0.15s, 0.15s, 0.15s ease;
		transform-origin: left center;
		will-change: top, transform, color;
		pointer-events: none;

		color: ${colors.gray};
	}

	.input {
		border-radius: 3px;
		border: 1px solid ${colors.gray};
		padding: 10px 16px;

		transition: border-color 0.5s ease;
		will-change: border-color;
		outline: none;
	}

	${props => props.isActive && ActiveInputStyle}
	${props => props.isFocused && FocusedInputStyle}
`;

const ActiveInputStyle: ElementStyle<InputWrapperProps> = props => css`
	.placeholder {
		top: 0;
		transform: translateY(-50%) scale(0.75);
	}
`;

const FocusedInputStyle: ElementStyle<InputWrapperProps> = props => css`
	.placeholder {
		color: ${colors[props.color]};
	}

	.input {
		border-color: ${colors[props.color]};
	}
`;
