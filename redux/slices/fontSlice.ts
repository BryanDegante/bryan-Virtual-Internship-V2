import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FontState = {
	fontSize: string;
};

const initialState: FontState = {
	fontSize: 'base',
};

export const fontSlice = createSlice({
	name: 'playerfont',
	initialState,
	reducers: {
		setFontSize: (state, action: PayloadAction<string>) => {
			state.fontSize = action.payload;
		},
	},
});

export const { setFontSize } = fontSlice.actions;

export default fontSlice.reducer;
