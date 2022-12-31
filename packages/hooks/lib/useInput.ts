import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

type SetState<StateType> = Dispatch<SetStateAction<StateType>>;

interface InputAttrs<ValueType> {
	value: ValueType;
	onChange: ChangeEventHandler<HTMLInputElement>;
}
type UseInputResult<ValueType> = [ValueType, InputAttrs<ValueType>, SetState<ValueType>];

export const useInput = (initialValue?: string): UseInputResult<string> => {
	const [value, setValue] = useState(initialValue);

	const inputAttrs = {
		value,
		onChange: (event: ChangeEvent<HTMLInputElement>) => {
			setValue(event.target.value);
		},
	};

	return [value, inputAttrs, setValue];
};
