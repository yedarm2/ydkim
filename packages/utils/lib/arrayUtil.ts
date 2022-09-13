export const seperate = <T>(array: T[], seperateFunction: (item: T) => boolean): [T[], T[]] => {
	return array.reduce(
		(result, item) => {
			if (seperateFunction(item)) {
				result[0].push(item);
			} else {
				result[1].push(item);
			}

			return result;
		},
		[[], []],
	);
};
