import { ReactElement, PropsWithChildren, SyntheticEvent, useMemo, FC } from 'react';
import styled from '@emotion/styled';

import { generateRandom } from '@ydkim/utils';
import { ClassnamesArgument, classNames } from '@ydkim/browser-utils';

import { Color, colors } from '../variables';

export interface RadioProps<Value> {
	disabled?: boolean;
	id?: string;
	name: string;
	radioOnRight?: boolean;
	value: Value;
	modelValue: Value;
	className?: ClassnamesArgument;
	onChange: (value: Value, event?: SyntheticEvent) => void;
	color?: Color;
}

const RadioWrapper = styled.div<{
	isChecked: boolean;
	color: Color;
}>`
	.label {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.radio-ui {
		border-radius: 1000px;
		border: 2px solid ${props => (props.isChecked ? colors[props.color] : colors.gray)};
		width: 20px;
		height: 20px;

		position: relative;

		transition: border-color 0.1s;

		&::before {
			content: '';
			width: 65%;
			height: 65%;
			border-radius: 1000px;

			background-color: ${props => (props.isChecked ? colors[props.color] : colors.gray)};

			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(${props => (props.isChecked ? 1 : 0)});
			transition: transform 0.1s;
		}
	}
`;

export const Radio: <Value>(props: PropsWithChildren<RadioProps<Value>>) => ReactElement = ({
	disabled,
	id,
	name,
	radioOnRight,
	value,
	modelValue,
	color,
	onChange,
	className,
	children,
}) => {
	const idString = useMemo(() => id || generateRandom.idString(), [id]);
	const isChecked = value === modelValue;
	const changeValue = () => {
		if (disabled) return;

		onChange(modelValue);
	};

	return (
		<RadioWrapper
			isChecked={isChecked}
			className={classNames(className)}
			color={disabled ? 'gray' : color}
		>
			<input
				type="radio"
				name={name}
				id={idString}
				disabled={disabled}
				onChange={changeValue}
				checked={isChecked}
				className="a11y"
			/>
			<label htmlFor={idString} className="label">
				{radioOnRight && <div className="content">{children}</div>}
				<div className="radio-ui" />
				{!radioOnRight && <div className="content">{children}</div>}
			</label>
		</RadioWrapper>
	);
};

(Radio as FC).defaultProps = {
	color: 'black',
};
