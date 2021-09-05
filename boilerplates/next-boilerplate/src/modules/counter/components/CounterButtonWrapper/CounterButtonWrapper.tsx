import { FC } from 'react';
import { Button, ButtonWrapper } from './CounterButtonWrapper.style';

const CounterButtonWrapper: FC<CounterButtonProps> = ({ buttonType }) => {
	return (
		<ButtonWrapper>
			<Button buttonType="previous">previous</Button>
			<Button buttonType="next">next</Button>
		</ButtonWrapper>
	);
};

export default CounterButtonWrapper;
