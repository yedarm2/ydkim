import React, { FC, useState } from 'react';

type MyFormProps = {
	onSubmit: (form: { name: string; description: string }) => void;
};

const MyForm: FC<MyFormProps> = ({ onSubmit }) => {
	const [form, setForm] = useState({
		name: '',
		description: '',
	});
	const { name, description } = form;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(form);
		setForm({
			name: '',
			description: '',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name="name" value={name} onChange={onChange} />
			<input name="description" value={description} onChange={onChange} />
			<button type="submit">등록</button>
		</form>
	);
};

export default MyForm;
