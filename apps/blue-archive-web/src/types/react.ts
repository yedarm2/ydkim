import { Dispatch, SetStateAction } from 'react';

export type SetState<Value> = Dispatch<SetStateAction<Value>> | ((value: Value) => void);

export type PropsWithClass<Props = unknown> = { className?: string } & Props;
