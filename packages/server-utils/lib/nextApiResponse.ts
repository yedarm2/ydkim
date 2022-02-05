import { NextApiResponse } from 'next';

export const json = (
	res: NextApiResponse,
	{ data, meta, status = 200 }: { data: any; meta: any; status?: number },
) => {
	res.status(status).json({ data, meta });
};

export const notFound = (res: NextApiResponse) => {
	error(res, { status: 404, error: '404 Not Found' });
};

export const error = (
	res: NextApiResponse,
	{ status = 500, error }: { status?: number; error: any },
) => {
	res.status(status).json({ error });
};
