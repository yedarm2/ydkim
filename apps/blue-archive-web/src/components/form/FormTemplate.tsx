import {
	Children,
	FormHTMLAttributes,
	PropsWithChildren,
	ReactNode,
	cloneElement,
	isValidElement,
} from 'react';

import { classNames } from '@ydkim/browser-utils';
import { Button } from './Button';
import { PropsWithClass } from '@/types/react';
import { formRowStyle, formStyle } from './FormTemplate.css';
import { Input, InputProps } from './Input';

export interface FormTemplateProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'title'> {
	title?: ReactNode;
	buttonText?: string;
}

export const FormTemplate = ({
	title,
	buttonText = '생성',
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
	children: _children,
}: PropsWithChildren<PropsWithClass<FormTemplateRowProps>>) => {
	const children = Children.map(_children, child => {
		if (!isValidElement(child) || child.type !== Input) return child;

		return cloneElement(child, {
			...child.props,
			placeholder: label,
		} as InputProps);
	});

	return (
		<div className={classNames(formRowStyle, className)}>
			<div className="label">{label}</div>
			<div className="divider" />
			<div className="input-wrapper">{children}</div>
		</div>
	);
};
