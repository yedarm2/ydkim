import { FormHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import { classNames } from '@ydkim/browser-utils';
import { Button } from './Button';
import { PropsWithClass } from '@/types/react';
import { formRowStyle, formStyle } from './FormTemplate.css';

export interface FormTemplateProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'title'> {
	title?: ReactNode;
	buttonText?: string;
}

export const FormTemplate = ({
	title,
	buttonText,
	className,
	children,
	...formProps
}: FormTemplateProps) => {
	return (
		<form className={classNames(formStyle, className)} {...formProps}>
			<h2 className="title">{title}</h2>
			<div className="children-wrapper">{children}</div>
			<div className="button-wrapper">
				<Button className="submit-button">{buttonText}</Button>
			</div>
		</form>
	);
};

export interface FormTemplateRowProps {
	label: string;
}

FormTemplate.Row = ({
	label,
	className,
	children,
}: PropsWithChildren<PropsWithClass<FormTemplateRowProps>>) => {
	return (
		<div className={classNames(formRowStyle, className)}>
			<div className="label">{label}</div>
			<div className="divider" />
			<div className="input-wrapper">{children}</div>
		</div>
	);
};
