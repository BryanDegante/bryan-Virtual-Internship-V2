'use client';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from '@/components/UI/Skeleton/Skeleton';

export default function Settings() {
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
	const router = useRouter();

	const [subscription, setSubscription] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			setIsLoading(false);
			setSubscription(null);
			return;
		}

		let cancelled = false;
		const currentUser = user;

		async function getSubscription() {
			setIsLoading(true);

			try {
				const userRef = doc(db, 'users', currentUser.uid);
				const userSnapshot = await getDoc(userRef);

				if (cancelled) return;

				if (userSnapshot.exists()) {
					const data = userSnapshot.data();
					setSubscription(data.subscription?.plan ?? 'none');
				} else {
					setSubscription('none');
				}
			} catch (error) {
				console.error('Error fetching subscription:', error);

				if (!cancelled) {
					setSubscription(null);
				}
			} finally {
				if (!cancelled) {
					setIsLoading(false);
				}
			}
		}

		void getSubscription();

		return () => {
			cancelled = true;
		};
	}, [user]);

	return (
		<div className="personal-container">
			<div className="personal-row">
				<div className="text-left border-b border-[#e1e7ea] text-[32px] text-text mb-8 font-bold pb-4">
					Settings
				</div>

				{!user ? (
					<div className="max-w-115 flex flex-col items-center mx-auto">
						<img
							src="/assets/login.png"
							alt=""
							className="w-full h-full"
						/>

						<div className="text-2xl font-bold text-text text-center mb-4">
							Log in to your account to see your details.
						</div>

						<button
							onClick={() => dispatch(setIsAuthOpen())}
							className="bg-[#2bd97c] text-text h-10 rounded-sm text-base transition-colors duration-200 flex items-center justify-center min-w-45"
						>
							Login
						</button>
					</div>
				) : isLoading ? (
					<>
						<div className="flex flex-col items-start gap-3 mb-8 border-b border-[#e1e7ea] pb-6">
							<Skeleton width="200px" height="20px" />
							<Skeleton width="130px" height="16px" />
							<Skeleton width="90px" height="40px" />
						</div>

						<div className="flex flex-col items-start gap-3 pb-6">
							<Skeleton width="80px" height="20px" />
							<Skeleton width="220px" height="16px" />
						</div>
					</>
				) : (
					<>
						<div className="flex flex-col items-start gap-2 mb-8 border-b border-[#e1e7ea] pb-6">
							<div className="text-lg font-bold text-text">
								Your Subscription plan
							</div>

							<div className="text-text">
								{subscription === 'none' ? (
									<>
										<div>Basic</div>
										<button
											onClick={() =>
												router.push('/choose-plan')
											}
											className="bg-[#2bd97c] text-text h-10 px-6 rounded-sm"
										>
											Upgrade
										</button>
									</>
								) : subscription === 'monthly' ? (
									<div>Premium</div>
								) : subscription === 'yearly' ? (
									<div>Premium Plus</div>
								) : (
									<div>Unable to load subscription plan.</div>
								)}
							</div>
						</div>

						<div className="flex flex-col items-start gap-2 pb-6">
							<div className="text-lg font-bold text-text">
								Email
							</div>
							<div className="text-text">{user.email}</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
