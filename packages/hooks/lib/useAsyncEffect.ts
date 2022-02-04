import { useEffect } from 'react';

export const useAsyncEffect = (effectCallback: () => Promise<(() => void) | void> | void, deps) => {
	useEffect(() => {
		const effectResultPromise = effectCallback();

		if (effectResultPromise instanceof Promise) {
			return () => {
				effectResultPromise.then(effectResult => {
					if (effectResult instanceof Function) {
						effectResult();
					}
				});
			};
		}
	}, deps);
};
