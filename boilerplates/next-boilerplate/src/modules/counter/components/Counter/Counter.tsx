import { FC } from 'react';
import CounterButtonWrapper from '../CounterButtonWrapper/CounterButtonWrapper';

const Counter: FC = () => {
	return (
		<div>
			<CounterButtonWrapper buttonType="previous" />
		</div>
	);
};

export default Counter;
