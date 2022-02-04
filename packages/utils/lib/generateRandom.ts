const createUniqueGenerator = <Type>(generator: () => Type): (() => Type) => {
	const valueSet = new Set<Type>();
	const getValue = () => {
		const result = generator();

		if (!valueSet.has(result)) {
			valueSet.add(result);
			return result;
		}

		return getValue();
	};

	return () => getValue();
};

export const number = (min = 0, max = 1) => Math.floor(Math.random() * max - min) + min;

export const string = (stringLength = 11) => Math.random().toString(36).substr(2, stringLength);

const uniqueIdGenerator = createUniqueGenerator(() => string());
export const idString = () => uniqueIdGenerator();
