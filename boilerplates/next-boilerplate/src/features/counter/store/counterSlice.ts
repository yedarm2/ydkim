import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ? export 하지 않으면 '내보낸 변수기 어쩌구 저쩌구...' 에러가 걸린다... 어째서?
export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},

		decrement: state => {
			state.value -= 1;
		},

		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
