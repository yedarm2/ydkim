import { NextApiRequest, NextApiResponse } from 'next';
import { end, json, notFound, error as serverError } from './nextApiResponse';

type RequestMethods = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

type CustomNextRouteResult = {
	data: any;
	meta?: any;
} | void;

type CustomNextRoute<Context = any> = (
	req: NextApiRequest,
	res: NextApiResponse,
	context?: Context,
) => CustomNextRouteResult | Promise<CustomNextRouteResult>;

type RoutesByMethods<Context = any> = {
	[method in Lowercase<RequestMethods>]?: CustomNextRoute<Context>;
};

export const createNextRoute = (processors: RoutesByMethods) => {
	return async (req: NextApiRequest, res: NextApiResponse, context?: any) => {
		try {
			const route = processors[req.method.toLowerCase()] as CustomNextRoute;

			if (route) {
				const result = await route(req, res, context);

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

// * 타입 지원이 엉망이다. 고치고 싶다...
export const createNextRouteWithContext = <Context = any>({
	methods,
	getContext,
}: {
	methods: RoutesByMethods<Context>;
	getContext: (req: NextApiRequest, res: NextApiResponse) => Context | Promise<Context>;
}) => {
	const route = createNextRoute(methods);

	return async (req: NextApiRequest, res: NextApiResponse) => {
		let context: Context;

		try {
			context = await getContext(req, res);
		} catch (error) {
			return serverError(res, { error });
		}

		return route(req, res, context);
	};
};

createNextRoute({});
