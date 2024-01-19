import { Option } from '@/types/common';
import { PropsWithClass } from '@/types/react';

export interface SelectProps {
	name?: string;
	optionList: Option[];
}

export const Select = ({ name, className, optionList }: PropsWithClass<SelectProps>) => {
	return (
		<select name={name} className={className}>
			{optionList.map(option => (
				<option key={option.value} value={option.value}>
					{option.option}
				</option>
			))}
		</select>
	);
};
