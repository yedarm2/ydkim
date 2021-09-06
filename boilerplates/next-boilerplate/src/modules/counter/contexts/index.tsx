import { useState, useCallback, FC, createContext, useContext } from 'react';

const CounterContext = createContext<number | null>(null);
const CounterDispatchContext = createContext<(number: number) => void | null>(null);

export const CounterProvider: FC = ({ children }) => {
	const [count, setCount] = useState(0);
	const dispatch = useCallback((valueToAdd: number) => setCount(number => number + valueToAdd), []);

	return (
		<CounterContext.Provider value={count}>
			<CounterDispatchContext.Provider value={dispatch}>{children}</CounterDispatchContext.Provider>
		</CounterContext.Provider>
	);
};

export const useCounter = () => {
	return useContext(CounterContext);
};

export const useCounterDispatch = () => {
	const dispatch = useContext(CounterDispatchContext);
	const increment = () => dispatch(1);
	const decrement = () => dispatch(-1);

	return {
		increment,
		decrement,
	};
};
