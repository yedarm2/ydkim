import { SyntheticEvent, FC, KeyboardEvent, PropsWithChildren, useMemo } from 'react';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';
import styled from '@emotion/styled';

import { ClassnamesArgument, classNames, generateRandom } from '@ydkim/utils';

import { Color, colors } from '../variables';

export interface CheckboxStyleProps {
	color: Color;
}

export interface CommonCheckboxProps extends CheckboxStyleProps {
	disabled?: boolean;
	id?: string;
	name: string;
	checkboxOnRight?: boolean;
	className?: ClassnamesArgument;
	onNativeChange?: (event: SyntheticEvent) => void;
}

export interface CheckboxProps extends CommonCheckboxProps {
	isChecked: boolean;
	onChange: (event: SyntheticEvent) => void;
}

const CheckboxWrapper = styled.div<CheckboxStyleProps>`
	.label {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
	}

	.icon {
		margin: 0 1px 0 0;
		color: ${props => colors[props.color]};
	}
`;

export const Checkbox: FC<CheckboxProps> = ({
	isChecked,
	name,
	id,
	disabled,
	checkboxOnRight,
	color,
	className,
	onChange,
	onNativeChange,
	children,
}) => {
	const idString = useMemo(() => id || generateRandom.idString(), [id]);
	const changeHandler = (event: SyntheticEvent) => {
		if (disabled) return;

		if (onChange) onChange(event);
		if (onNativeChange) onNativeChange(event);
	};

	const onKeyUp = (event: KeyboardEvent) => {
		const SPACE_KEY = ' ';
		if (event.key === SPACE_KEY) changeHandler(event);
	};

	return (
		<CheckboxWrapper className={classNames(className)} color={disabled ? 'gray' : color}>
			<input
				type="checkbox"
				id={idString}
				name={name}
				checked={isChecked}
				onChange={changeHandler}
				disabled={disabled}
				className="a11y"
			/>
			<label htmlFor={idString} tabIndex={0} onKeyUp={onKeyUp} className="label">
				{checkboxOnRight && children}
				{isChecked ? <FaCheckSquare className="icon" /> : <FaRegSquare className="icon" />}
				{!checkboxOnRight && children}
			</label>
		</CheckboxWrapper>
	);
};

Checkbox.defaultProps = {
	color: 'black',
};

export interface SingleCheckboxProps<Value, FalseValue = Value> extends CommonCheckboxProps {
	value: Value | FalseValue;
	trueValue?: Value;
	falseValue?: FalseValue;
	onChange?: (value: Value | FalseValue, event?: SyntheticEvent) => void;
}

export const SingleCheckBox = <Value, FalseValue = Value>({
	value,
	trueValue,
	falseValue,
	onChange,
	children,
	...checkboxProps
}: PropsWithChildren<SingleCheckboxProps<Value, FalseValue>>) => {
	const isChecked = value === trueValue;
	const changeHandler = (event: SyntheticEvent) => {
		const newValue = isChecked ? falseValue : trueValue;

		onChange(newValue, event);
	};

	return (
		<Checkbox isChecked={isChecked} onChange={changeHandler} {...checkboxProps}>
			{children}
		</Checkbox>
	);
};

SingleCheckBox.defaultProps = {
	trueValue: true,
	falseValue: false,
};

export interface MultipleCheckboxProps<Value> extends CommonCheckboxProps {
	value: Value[];
	modelValue: Value;
	onChange?: (value: Value[], event?: SyntheticEvent) => void;
}

export const MultipleCheckBox = <Value extends any>({
	value,
	modelValue,
	onChange,
	children,
	...checkboxProps
}: PropsWithChildren<MultipleCheckboxProps<Value>>) => {
	const isChecked = value.includes(modelValue);
	const changeHandler = (event: SyntheticEvent) => {
		const newValue = isChecked ? value.filter(item => item === modelValue) : [...value, modelValue];

		onChange(newValue, event);
	};

	return (
		<Checkbox isChecked={isChecked} onChange={changeHandler} {...checkboxProps}>
			{children}
		</Checkbox>
	);
};
