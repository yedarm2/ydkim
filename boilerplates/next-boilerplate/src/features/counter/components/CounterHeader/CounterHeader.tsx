import { FC, memo } from 'react';
import { Title } from './CounterHeader.style';

const CounterHeader: FC = () => {
	return <Title>counter</Title>;
};

export default memo(CounterHeader);
