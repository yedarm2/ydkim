'use client';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Option } from '@/shared/types';
import { PropsWithClass } from '@/shared/types';
import { KeyboardEventHandler, useRef, useState } from 'react';
import { customSelectStyle, optionListStyle, valueWrapperStyle } from './Select.css';
import { KeyTypes } from '@/shared';
import { classNames } from '@ydkim/browser-utils';

type SelectValue = number | string;

export interface SelectProps {
	optionList: Option[];
	placeholder?: string;
	value?: SelectValue;
	required?: boolean;
	name?: string;
	onChangeValue?: (value: SelectValue) => void;
}

export const Select = ({
	value,
	name,
	placeholder,
	onChangeValue,
	className,
	optionList,
	required,
}: PropsWithClass<SelectProps>) => {
	const [innerValue, setInnerValue] = useState<SelectValue | undefined>(undefined);

	const selectedValue = value ?? innerValue;
	const selectedIndex: number | undefined = optionList.findIndex(
		option => option.value === selectedValue,
	);
	const selectedOption: string | undefined = optionList[selectedIndex]?.option;

	const rootElementRef = useRef<HTMLDivElement>(null);
	const [optionIsRendering, setOptionIsRendering] = useState(false);
	const openOption = () => setOptionIsRendering(true);
	const closeOption = () => setOptionIsRendering(false);

	const setValue = (value: SelectValue) => {
		const valueToSet =
			typeof value === 'string' && !isNaN(parseInt(value)) ? parseInt(value as string) : value;

		if (onChangeValue) {
			onChangeValue?.(valueToSet);
		} else {
			setInnerValue(valueToSet);
		}
	};

	const [focusedIndex, setFocusedIndex] = useState<number | undefined>(undefined);
	const setValueByOffset = (offset: -1 | 1) => {
		if (focusedIndex === undefined) {
			const indexToSelect = offset === -1 ? optionList.length - 1 : 0;
			setFocusedIndex(indexToSelect);
			setValue(optionList[indexToSelect].value);
			return;
		}

		const indexToSelect = focusedIndex + offset;
		const selectedOption = optionList[indexToSelect];

		if (!selectedOption) return;
		setFocusedIndex(indexToSelect);
		setValue(selectedOption.value);
	};

	const onKeyDownOption: KeyboardEventHandler<HTMLDivElement> = event => {
		if (event.key === KeyTypes.ARROW_UP) {
			setValueByOffset(-1);
		} else if (event.key === KeyTypes.ARROW_DOWN) {
			setValueByOffset(1);
		} else if (event.key === KeyTypes.ENTER) {
			closeOption();
		}
	};

	return (
		<>
			<select
				name={name}
				className="a11y"
				value={selectedValue}
				onChange={event => setValue(event.target.value)}
				required={required}
			>
				{optionList.map(option => (
					<option key={option.value} value={option.value}>
						{option.option}
					</option>
				))}
			</select>
			<div
				tabIndex={0}
				onFocus={openOption}
				onBlur={closeOption}
				onKeyDown={onKeyDownOption}
				className={classNames(customSelectStyle, className)}
				ref={rootElementRef}
			>
				<div className={valueWrapperStyle}>
					{selectedOption ?? placeholder}
					<MdKeyboardArrowDown />
				</div>
				{optionIsRendering && (
					<ul className={optionListStyle}>
						{optionList.map((option, optionIndex) => (
							<li
								key={option.value}
								className={classNames({ focused: focusedIndex === optionIndex })}
								onMouseEnter={() => setFocusedIndex(optionIndex)}
								onClick={() => {
									setValue(option.value);
									closeOption();
									rootElementRef.current?.blur();
								}}
							>
								{option.option}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
