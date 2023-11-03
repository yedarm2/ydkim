import { Dispatch, SetStateAction } from 'react';

export type SetState<Value> = Dispatch<SetStateAction<Value>>;

export type PropsWithStyle<Props = unknown> = { className: string } & Props;
