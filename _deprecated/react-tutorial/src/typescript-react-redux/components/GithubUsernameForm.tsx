import React, { FC, useState } from 'react';
import './GithubUsernameForm.scss';

type GithubUsernameFormProps = {
	onSubmitUsername: (username: string) => void;
};

const GithubUsernameForm: FC<GithubUsernameFormProps> = ({ onSubmitUsername }) => {
	const [input, setInput] = useState('');

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmitUsername(input);
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	return (
		<form onSubmit={onSubmit} className="GithubUsernameForm">
			<input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
			<button type="submit">조회</button>
		</form>
	);
};

export default GithubUsernameForm;
