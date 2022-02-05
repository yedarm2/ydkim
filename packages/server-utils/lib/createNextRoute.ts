import { NextApiRequest, NextApiResponse } from 'next';
import { json, notFound, error as serverError } from './nextApiResponse';

type RequestMethods = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

type NextRouteResult = {
	data: any;
	meta?: any;
};

type NextRoute = (
	req: NextApiRequest,
	res: NextApiResponse,
) => NextRouteResult | Promise<NextRouteResult>;

type RoutesByMethods = {
	[method in Lowercase<RequestMethods>]?: NextRoute;
};

export const createNextRoute = (routesByMethods: RoutesByMethods) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const route = routesByMethods[req.method.toLowerCase()] as NextRoute;

			if (route) {
				const { data, meta } = await route(req, res);

				json(res, { data, meta });
			} else {
				notFound(res);
			}
		} catch (error) {
			serverError(res, { error });
			throw error;
		}
	};
};

createNextRoute({});
