import { NextApiRequest, NextApiResponse } from 'next';
import { end, json, notFound, error as serverError } from './nextApiResponse';

type RequestMethods = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

type NextRouteResult = {
	data: any;
	meta?: any;
} | void;

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
				const result = await route(req, res);

				if (!result) {
					return end(res);
				}
				const { data, meta } = result;

				return json(res, { data, meta });
			} else {
				return notFound(res);
			}
		} catch (error) {
			console.log('오류 발생', error);
			return serverError(res, { error });
		}
	};
};

createNextRoute({});
