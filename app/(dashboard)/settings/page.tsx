'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Settings() {
	const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const [subscription, setSubscription] = useState<string | null>(null);

	useEffect(() => {
		if (!user) return;

		const getSubscription = async () => {
			const userRef = doc(db, 'users', user.uid);
			const userSnapshot = await getDoc(userRef);

			if (userSnapshot.exists()) {
				const data = userSnapshot.data();
				setSubscription(data.subscription?.plan ?? null);
			}
		};

		getSubscription();
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
								) : (
									<div>Premium Plus</div>
								)}
							</div>
						</div>
						<div className="flex flex-col items-start gap-2  pb-6">
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
