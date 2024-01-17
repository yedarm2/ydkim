import { FormHTMLAttributes } from 'react';

export interface NextPageParams<Params = unknown, SearchParams = unknown> {
	params: Params;
	searchParams: SearchParams;
}

export interface ErrorPageComponentProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export type FormAction = FormHTMLAttributes<HTMLFormElement>['action'];
