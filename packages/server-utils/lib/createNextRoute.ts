import { NextApiRequest, NextApiResponse } from 'next';
import { end, json, notFound, error as serverError } from './nextApiResponse';

type RequestMethods = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

type CustomNextRouteResult = {
	data: any;
	meta?: any;
} | void;

type CustomNextRoute = (
	req: NextApiRequest,
	res: NextApiResponse,
) => CustomNextRouteResult | Promise<CustomNextRouteResult>;

type RoutesByMethods = {
	[method in Lowercase<RequestMethods>]?: CustomNextRoute;
};

export const createNextRoute = (processors: RoutesByMethods) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const route = processors[req.method.toLowerCase() as Lowercase<RequestMethods>];

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
			return serverError(res, { error });
		}
	};
};

createNextRoute({});
