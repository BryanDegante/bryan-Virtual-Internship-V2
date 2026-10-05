import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import  fontSlice  from './slices/fontSlice';
export const store = configureStore({
	reducer: {
		auth: authSlice,
		playerfont: fontSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
