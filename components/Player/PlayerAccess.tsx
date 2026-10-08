'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';

import type { RootState } from '@/redux/store';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import { db } from '@/firebase/firebase';

import { Book } from '@/types/Book';
import AudioPlayer from '@/components/UI/Audio Player/AudioPlayer';
import AudioSummary from '@/components/Player/AudioSummary';

type PlayerAccessProps = {
	book: Book;
};

export default function PlayerAccess({ book }: PlayerAccessProps) {
	const user = useSelector((state: RootState) => state.auth.user);

	const dispatch = useDispatch();
	const router = useRouter();

	const [subscription, setSubscription] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!user) {
			setSubscription(null);
			return;
		}

		const getSubscription = async () => {
			setLoading(true);

			try {
				const userRef = doc(db, 'users', user.uid);
				const userSnapshot = await getDoc(userRef);

				if (userSnapshot.exists()) {
					const data = userSnapshot.data();

					setSubscription(data.subscription?.status ?? null);
				}
			} catch (error) {
				console.error('Error getting subscription:', error);
			} finally {
				setLoading(false);
			}
		};

		getSubscription();
	}, [user]);

	if (!user) {
		return (
			<div className="max-w-115 flex flex-col items-center mx-auto pt-10">
				<img src="/assets/login.png" alt="" className="w-full h-full" />

				<div className="text-2xl font-bold text-text text-center mb-4">
					Log in to your account to listen to this title.
				</div>

				<button
					onClick={() => dispatch(setIsAuthOpen())}
					className="bg-[#2bd97c] text-text h-10 rounded-sm text-base transition-colors duration-200 flex items-center justify-center min-w-45"
				>
					Login
				</button>
			</div>
		);
	}

	if (!book.subscriptionRequired) {
		return (
			<>
				<div className="whitespace-pre-line p-6 max-w-200 mx-auto">
					<div className="text-text text-2xl mb-8 pb-4 leading-normal border-b border-[#e1e7ea] font-bold">
						{book.title}
					</div>

					<AudioSummary summary={book.summary} />
				</div>

				<AudioPlayer
					title={book.title}
					imageLink={book.imageLink}
					author={book.author}
					audioLink={book.audioLink}
				/>
			</>
		);
	}

	if (loading) {
		return null;
	}

	if (subscription !== 'active' && subscription !== 'trialing') {
		return (
			<div className="max-w-115 flex flex-col items-center mx-auto pt-10">
				<img src="/assets/login.png" alt="" className="w-full h-full" />

				<div className="text-2xl font-bold text-text text-center mb-4">
					Upgrade your account to listen to this title.
				</div>

				<button
					onClick={() => router.push('/choose-plan')}
					className="bg-[#2bd97c] text-text h-10 rounded-sm text-base transition-colors duration-200 flex items-center justify-center min-w-45"
				>
					Upgrade
				</button>
			</div>
		);
	}

	return (
		<>
			<div className="whitespace-pre-line p-6 max-w-200 mx-auto">
				<div className="text-text text-2xl mb-8 pb-4 leading-normal border-b border-[#e1e7ea] font-bold">
					{book.title}
				</div>

				<AudioSummary summary={book.summary} />
			</div>

			<AudioPlayer
				title={book.title}
				imageLink={book.imageLink}
				author={book.author}
				audioLink={book.audioLink}
			/>
		</>
	);
}
