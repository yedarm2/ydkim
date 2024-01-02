import { Dispatch, SetStateAction } from 'react';

export type SetState<Value> = Dispatch<SetStateAction<Value>> | ((value: Value) => void);

export type PropsWithStyle<Props = unknown> = { className: string } & Props;
