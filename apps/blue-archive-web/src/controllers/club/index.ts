'use server';

import { clubService } from '@ydkim/core-service';
import { getCreateClubPayload } from './mapper';
import { redirect } from 'next/navigation';

export const createClub = async (formData: FormData) => {
	const payload = getCreateClubPayload(formData);
	const club = await clubService.createClub(payload);
	redirect(`/club/${club.id}`);
};
