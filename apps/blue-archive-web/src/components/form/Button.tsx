import { DOMAttributes } from 'react';

export const Button = (buttonProps: DOMAttributes<HTMLButtonElement>) => {
	return <button {...buttonProps} />;
};
