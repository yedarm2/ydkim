import { useReducer, useCallback } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE':
			const { name, value } = action;
			return {
				...state,
				[name]: value,
			};
		case 'RESET':
			return {
				username: '',
				email: '',
			};
		default:
			throw new Error('Unhandled Action');
	}
}

function useInputs(initialForm) {
	const [form, dispatch] = useReducer(reducer, initialForm);
	const onChange = useCallback(({ target: { name, value } }) => {
		dispatch({ type: 'CHANGE', name, value });
	}, []);
	const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

	return [form, onChange, reset];
}

export default useInputs;
