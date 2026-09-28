import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthUser = {
	uid: string;
	email: string | null;
	isAnonymous: boolean;
};

type AuthState = {
	isAuthOpen: boolean;
	user: AuthUser | null;
};

const initialState: AuthState = {
	isAuthOpen: false,
	user: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuthOpen: (state) => {
			state.isAuthOpen = !state.isAuthOpen;
		},
		setUser: (state, action: PayloadAction<AuthUser | null>) => {
			state.user = action.payload;
		},
	},
});

export const { setIsAuthOpen, setUser } = authSlice.actions;

export default authSlice.reducer;
