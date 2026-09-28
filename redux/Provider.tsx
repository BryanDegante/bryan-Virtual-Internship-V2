'use client';

import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { setUser } from './slices/authSlice';

function AuthListener({ children }: { children: React.ReactNode }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(
					setUser({
						uid: user.uid,
						email: user.email,
						isAnonymous: user.isAnonymous,
					}),
				);
			} else {
				dispatch(setUser(null));
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return children;
}

export default function ReduxProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<AuthListener>{children}</AuthListener>
		</Provider>
	);
}
