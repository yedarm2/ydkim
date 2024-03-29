import {
	Children,
	FC,
	FormHTMLAttributes,
	PropsWithChildren,
	ReactNode,
	cloneElement,
	isValidElement,
} from 'react';

import { classNames } from '@ydkim/browser-utils';
import { Button } from '@/shared/ui';
import { PropsWithClass } from '@/shared/types';
import { formRowStyle, formStyle } from './FormTemplate.css';
import { Input, InputProps } from './Input';
import { Select } from './Select';

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

const inputComponents: FC<any>[] = [Input, Select];

FormTemplate.Row = ({
	label,
	className,
	children: _children,
}: PropsWithChildren<PropsWithClass<FormTemplateRowProps>>) => {
	const children = Children.map(_children, child => {
		if (!isValidElement(child) || !inputComponents.includes(Input)) return child;

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
