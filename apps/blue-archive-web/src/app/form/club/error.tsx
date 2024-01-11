'use client';

import { ErrorPageComponentProps } from '@/types/next';
import { useEffect } from 'react';
import { NotFoundException } from './errorClass';

const ClubFormErrorHandler = ({ error }: ErrorPageComponentProps) => {
	useEffect(() => {
		console.log('error', error, error instanceof NotFoundException);
	}, [error]);

	return <div>{error.message}</div>;
};

export default ClubFormErrorHandler;
