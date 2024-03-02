'use client';

import { ErrorPageComponentProps } from '@/shared/types';

const ClubFormErrorHandler = ({ error }: ErrorPageComponentProps) => {
	return <div>{error.message}</div>;
};

export default ClubFormErrorHandler;
