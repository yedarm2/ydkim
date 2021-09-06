import { useState, useCallback, FC, createContext, useContext } from 'react';

export const CounterContext = createContext<number | null>(null);
export const CounterDispatchContext = createContext<(number: number) => void | null>(null);

export const CounterProvider: FC = ({ children }) => {
	const [count, setCount] = useState(0);
	const dispatch = useCallback((valueToAdd: number) => setCount(number => number + valueToAdd), []);

	return (
		<CounterContext.Provider value={count}>
			<CounterDispatchContext.Provider value={dispatch}>{children}</CounterDispatchContext.Provider>
		</CounterContext.Provider>
	);
};
