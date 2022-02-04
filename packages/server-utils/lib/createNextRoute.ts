import { NextApiRequest, NextApiResponse } from 'next';

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

				res.status(200).json({ data, meta });
			} else {
				res.status(404);
			}
		} catch (error) {
			console.log('route 에러 발생', error);
			throw error;
		}
	};
};

createNextRoute({});
