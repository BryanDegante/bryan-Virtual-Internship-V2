'use client';

import { IoPerson } from 'react-icons/io5';
import styles from '@/components/UI/Auth Modal/AuthenticationModal.module.css';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInAnonymously,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useRouter, usePathname } from 'next/navigation';

type AuthenticationModalProps = {
	isOpen: boolean;
};

function getAuthErrorMessage(
	error: unknown,
	action: 'login' | 'register' | 'reset' | 'google' | 'guest',
) {
	if (!(error instanceof FirebaseError)) {
		return 'Something went wrong. Please try again.';
	}

	switch (error.code) {
		case 'auth/invalid-email':
			return 'Please enter a valid email address.';

		case 'auth/invalid-credential':
			return action === 'login'
				? 'Invalid email or password.'
				: 'Unable to authenticate. Please try again.';

		case 'auth/user-not-found':
			return 'No account was found with that email address.';

		case 'auth/wrong-password':
			return 'The password is incorrect.';

		case 'auth/email-already-in-use':
			return 'An account with this email already exists. Try logging in.';

		case 'auth/weak-password':
			return 'Your password must be at least 6 characters.';

		case 'auth/missing-password':
			return 'Please enter your password.';

		case 'auth/missing-email':
			return 'Please enter your email address.';

		case 'auth/too-many-requests':
			return 'Too many attempts. Please try again later.';

		case 'auth/network-request-failed':
			return 'Network error. Check your internet connection.';

		case 'auth/popup-closed-by-user':
			return 'Google sign-in was cancelled.';

		case 'auth/popup-blocked':
			return 'Your browser blocked the sign-in popup. Allow popups and try again.';

		case 'auth/account-exists-with-different-credential':
			return 'An account already exists with this email using another sign-in method.';

		case 'auth/unauthorized-domain':
			return 'This domain is not authorized for sign-in. Check your Firebase settings.';

		case 'auth/operation-not-allowed':
			return 'This sign-in method is not enabled in Firebase.';

		case 'auth/expired-action-code':
		case 'auth/invalid-action-code':
			return 'This password-reset link is invalid or has expired. Request a new one.';

		case 'auth/user-disabled':
			return 'This account has been disabled.';

		default:
			console.error(`Authentication error (${action}):`, error.code);
			return 'Something went wrong. Please try again.';
	}
}

const AuthenticationModal = ({ isOpen }: AuthenticationModalProps) => {
	const [isLogin, setIsLogin] = useState(true);
	const [isForgotPassword, setIsForgotPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();
	const dispatch = useDispatch();
	const pathname = usePathname();
	const path = pathname === '/' ? '/for-you' : pathname;

	const clearMessages = () => {
		setErrorMessage('');
		setSuccessMessage('');
	};

	const handleRegister = async () => {
		try {
			clearMessages();
			setIsLoading(true);

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email.trim(),
				password,
			);

			await setDoc(doc(db, 'users', userCredential.user.uid), {
				subscription: {
					plan: 'none',
					status: 'inactive',
				},
			});

			dispatch(setIsAuthOpen());
			router.push(path);
		} catch (error) {
			console.error('Registration error:', error);
			setErrorMessage(getAuthErrorMessage(error, 'register'));
		} finally {
			setIsLoading(false);
		}
	};

	const handleLogin = async () => {
		try {
			clearMessages();
			setIsLoading(true);

			await signInWithEmailAndPassword(auth, email.trim(), password);

			dispatch(setIsAuthOpen());
			router.push(path);
		} catch (error) {
			console.error('Login error:', error);
			setErrorMessage(getAuthErrorMessage(error, 'login'));
		} finally {
			setIsLoading(false);
		}
	};

	const handleGuestLogin = async () => {
		try {
			clearMessages();
			setIsLoading(true);

			await signInAnonymously(auth);

			dispatch(setIsAuthOpen());
			router.push(path);
		} catch (error) {
			console.error('Guest login error:', error);
			setErrorMessage(getAuthErrorMessage(error, 'guest'));
		} finally {
			setIsLoading(false);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			clearMessages();
			setIsLoading(true);

			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);

			const userRef = doc(db, 'users', userCredential.user.uid);
			const userSnapshot = await getDoc(userRef);

			if (!userSnapshot.exists()) {
				await setDoc(userRef, {
					subscription: {
						plan: 'none',
						status: 'inactive',
					},
				});
			}

			dispatch(setIsAuthOpen());
			router.push(path);
		} catch (error) {
			console.error('Google sign-in error:', error);
			setErrorMessage(getAuthErrorMessage(error, 'google'));
		} finally {
			setIsLoading(false);
		}
	};

	const handlePasswordReset = async () => {
		try {
			clearMessages();
			setIsLoading(true);

			if (!email.trim()) {
				setErrorMessage('Please enter your email address.');
				return;
			}

			await sendPasswordResetEmail(auth, email.trim());

			setSuccessMessage(
				'If an account exists for that email, you will receive a password-reset email shortly.',
			);
		} catch (error) {
			console.error('Password reset error:', error);

			if (
				error instanceof FirebaseError &&
				error.code === 'auth/invalid-email'
			) {
				setErrorMessage('Please enter a valid email address.');
			} else if (
				error instanceof FirebaseError &&
				error.code === 'auth/too-many-requests'
			) {
				setErrorMessage('Too many attempts. Please try again later.');
			} else {
				setErrorMessage(
					'Unable to send the reset email. Please check your email and try again.',
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleClose = () => {
		clearMessages();
		setIsForgotPassword(false);
		dispatch(setIsAuthOpen());
	};

	if (!isOpen) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center flex-col z-10">
			<div className="relative w-full max-w-100 bg-white rounded-lg shadow-lg">
				<div className="pt-12 pb-6 px-8">
					<div className="text-center text-xl font-bold text-text mb-6">
						{isForgotPassword
							? 'Reset your password'
							: isLogin
								? 'Log in to Summarist'
								: 'Sign up to Summarist'}
					</div>

					{isForgotPassword ? (
						<>
							<p className="text-sm text-[#394547] text-center mb-5">
								Enter your email address and we'll send you
								instructions to reset your password.
							</p>

							<form
								className="flex flex-col gap-4"
								onSubmit={(event) => {
									event.preventDefault();
									handlePasswordReset();
								}}
							>
								<input
									className="h-10 rounded-sm text-[#394547] px-3 border-2 border-[#bac8ce] transition-colors focus:border-[#2bd97c] focus:outline-none"
									type="email"
									name="email"
									placeholder="Email Address"
									autoComplete="email"
									required
									onChange={(event) =>
										setEmail(event.target.value)
									}
									value={email}
									disabled={isLoading}
								/>

								{errorMessage && (
									<p
										role="alert"
										className="text-center text-sm text-red-500"
									>
										{errorMessage}
									</p>
								)}

								{successMessage && (
									<p
										role="status"
										className="text-center text-sm text-green-600"
									>
										{successMessage}
									</p>
								)}

								<button
									type="submit"
									disabled={isLoading}
									className="btn disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isLoading
										? 'Sending...'
										: 'Send Reset Email'}
								</button>
							</form>

							<button
								type="button"
								disabled={isLoading}
								className="block mx-auto mt-5 text-sm text-[#116be9] hover:text-[#124a98]"
								onClick={() => {
									clearMessages();
									setIsForgotPassword(false);
								}}
							>
								Back to login
							</button>
						</>
					) : (
						<>
							{isLogin && (
								<>
									<button
										type="button"
										disabled={isLoading}
										className="relative flex bg-[#3a579d] text-white justify-center w-full h-10 rounded-sm text-base transition-colors duration-200 items-center min-w-45 hover:bg-[#25496b] disabled:opacity-50 disabled:cursor-not-allowed"
										onClick={handleGuestLogin}
									>
										<figure className="flex items-center justify-center w-9 h-9 rounded-sm absolute left-0.5">
											<IoPerson className="w-6 h-6" />
										</figure>

										<p>
											{isLoading
												? 'Loading...'
												: 'Login as a Guest'}
										</p>
									</button>

									<div className={styles.auth__separator}>
										<span className="text-sm text-[#394547] font-medium mx-6">
											or
										</span>
									</div>
								</>
							)}

							<button
								type="button"
								disabled={isLoading}
								className="relative flex bg-[#4285f4] text-white justify-center w-full h-10 rounded-sm text-base items-center min-w-45 transition-colors duration-200 hover:bg-[#3367d6] disabled:opacity-50 disabled:cursor-not-allowed"
								onClick={handleGoogleSignIn}
							>
								<figure className="flex items-center justify-center w-9 h-9 rounded-sm absolute left-0.5 bg-white">
									<img
										src="/assets/google.png"
										alt=""
										className="w-6 h-6"
									/>
								</figure>

								{isLoading
									? 'Loading...'
									: isLogin
										? 'Login with Google'
										: 'Sign up with Google'}
							</button>

							<div className={styles.auth__separator}>
								<span className="text-sm text-[#394547] font-medium mx-6">
									or
								</span>
							</div>

							<form
								className="flex flex-col gap-4"
								onSubmit={(event) => {
									event.preventDefault();

									if (isLogin) {
										handleLogin();
									} else {
										handleRegister();
									}
								}}
							>
								<input
									className="h-10 rounded-sm text-[#394547] px-3 border-2 border-[#bac8ce] transition-colors focus:border-[#2bd97c] focus:outline-none"
									type="email"
									name="email"
									placeholder="Email Address"
									autoComplete="email"
									required
									onChange={(event) =>
										setEmail(event.target.value)
									}
									value={email}
									disabled={isLoading}
								/>

								<input
									className="h-10 rounded-sm text-[#394547] px-3 border-2 border-[#bac8ce] transition-colors focus:border-[#2bd97c] focus:outline-none"
									type="password"
									name="password"
									placeholder="Password"
									autoComplete={
										isLogin
											? 'current-password'
											: 'new-password'
									}
									required
									minLength={6}
									onChange={(event) =>
										setPassword(event.target.value)
									}
									value={password}
									disabled={isLoading}
								/>

								{errorMessage && (
									<p
										role="alert"
										className="text-center text-sm text-red-500"
									>
										{errorMessage}
									</p>
								)}

								{successMessage && (
									<p
										role="status"
										className="text-center text-sm text-green-600"
									>
										{successMessage}
									</p>
								)}

								<button
									type="submit"
									disabled={isLoading}
									className="btn disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<span>
										{isLoading
											? isLogin
												? 'Logging in...'
												: 'Signing up...'
											: isLogin
												? 'Login'
												: 'Sign up'}
									</span>
								</button>
							</form>

							{isLogin && (
								<button
									type="button"
									disabled={isLoading}
									className="block text-center text-[#116be9] font-light text-sm w-fit mx-auto mt-4 cursor-pointer hover:text-[#124a98] disabled:opacity-50"
									onClick={() => {
										clearMessages();
										setIsForgotPassword(true);
									}}
								>
									Forgot your Password?
								</button>
							)}
						</>
					)}
				</div>

				{!isForgotPassword && (
					<button
						type="button"
						disabled={isLoading}
						className="h-10 text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-b-sm font-light text-base hover:bg-[#e1e9e8] disabled:opacity-50 disabled:cursor-not-allowed"
						onClick={() => {
							clearMessages();
							setIsLogin(!isLogin);
						}}
					>
						{isLogin
							? "Don't have an account?"
							: 'Already have an account?'}
					</button>
				)}

				<button
					type="button"
					disabled={isLoading}
					aria-label="Close authentication modal"
					className="absolute top-3 right-3 flex cursor-pointer transition-opacity duration-200 hover:opacity-50 disabled:cursor-not-allowed"
					onClick={handleClose}
				>
					<IoMdClose className="w-7 h-7" />
				</button>
			</div>
		</div>
	);
};

export default AuthenticationModal;
