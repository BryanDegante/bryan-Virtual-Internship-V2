'use client';

import { IoMicOutline } from 'react-icons/io5';
import { LiaReadme } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

type ReadListenButtonProps = {
	audible: 'read' | 'listen';
	subscriptionRequired: boolean;
	bookId: string;
};

export default function ReadListenButton({
	audible,
	subscriptionRequired,
	bookId,
}: ReadListenButtonProps) {
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
	const router = useRouter();

	async function handleClick() {
		if (!user) {
			dispatch(setIsAuthOpen());
			return;
		}

		if (!subscriptionRequired) {
			router.push(`/player/${bookId}`);
			return;
		}

		const subscriptionRef = doc(db, 'users', user.uid);
		const subscriptionSnap = await getDoc(subscriptionRef);

		const subscription = subscriptionSnap.data()?.subscription;

		if (
			subscription?.status === 'active' ||
			subscription?.status === 'trialing'
		) {
			router.push(`/player/${bookId}`);
		} else {
			router.push('/choose-plan');
		}
	}

	return (
		<button
			className="flex items-center justify-center w-36 h-12 bg-text text-white text-base rounded-sm cursor-pointer gap-2 transition-opacity hover:opacity-80"
			onClick={handleClick}
		>
			<div className="flex">
				{audible === 'read' ? (
					<LiaReadme className="w-6 h-6 text-white" />
				) : (
					<IoMicOutline className="w-6 h-6 text-white" />
				)}
			</div>

			{audible === 'read' ? 'Read' : 'Listen'}
		</button>
	);
}
