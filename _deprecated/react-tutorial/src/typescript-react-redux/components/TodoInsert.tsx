import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

type TodoInsertProps = {
	onInsert: (text: string) => void;
};

const TodoInsert: FC<TodoInsertProps> = ({ onInsert }) => {
	const [value, setValue] = useState('');
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		onInsert(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
			<button type="submit">등록</button>
		</form>
	);
};

export default TodoInsert;
