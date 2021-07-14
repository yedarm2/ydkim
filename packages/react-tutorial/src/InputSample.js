import React, { useState, useRef } from 'react';

function InputSample() {
	const [inputs, setInputs] = useState({
		name: '',
		nickname: '',
	});
	const nameInput = useRef();
	const { name, nickname } = inputs;

	const onInput = ({ target }) => {
		const { name, value } = target;

		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const onReset = () => {
		setInputs({
			name: '',
			nickname: '',
		});
		nameInput.current.focus();
	};

	return (
		<div>
			<input name="name" placeholder="이름" onInput={onInput} value={name} ref={nameInput} />
			<input name="nickname" placeholder="닉네임" onInput={onInput} value={nickname} />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	);
}

export default InputSample;
