import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthOpen: false}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuthOpen: (state) => {
			state.isAuthOpen = !state.isAuthOpen;
		},
	
	},
});

export const { setIsAuthOpen } = authSlice.actions;

export default authSlice.reducer;