import React, { useState } from 'react';
import CheckBox from './components/CheckBox';

function CssModuleApp() {
	const [check, setCheck] = useState(false);
	const onChange = event => {
		setCheck(event.target.checked);
	};

	return (
		<div>
			<CheckBox onChange={onChange} checked={check}>
				다음 약관에 모두 동의
			</CheckBox>
		</div>
	);
}

export default CssModuleApp;
