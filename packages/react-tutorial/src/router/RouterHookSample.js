import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import useReactRouter from 'use-react-router';

export default function RouterHookSample() {
	const { history, location, match } = useReactRouter();
	console.log({ history, location, match });
	console.log({ history: useHistory(), location: useLocation(), match: useRouteMatch('/aaaa') });

	return null;
}
