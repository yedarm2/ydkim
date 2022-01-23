import { ReactElement, PropsWithChildren } from 'react';

interface RadioProps<Value> {
	value: Value;
	modelValue: Value;
	onChange: (value: Value) => void;
}

export const Radio: <Value>(props: PropsWithChildren<RadioProps<Value>>) => ReactElement = ({
	value,
	modelValue,
	onChange,
	children,
}) => {
	const isChecked = value === modelValue;
	const changeValue = () => {
		onChange(modelValue);
	};

	return (
		<div onClick={changeValue}>
			<label>{children}</label>
		</div>
	);
};
