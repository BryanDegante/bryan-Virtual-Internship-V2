'use client';

import { setIsAuthOpen } from '@/redux/slices/authSlice';
import type { RootState } from '@/redux/store';
import type { Book } from '@/types/Book';
import { CiBookmark } from 'react-icons/ci';
import { IoBookmark } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '@/firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

type LibraryButtonProp = {
	book: Book;
};

export default function LibraryButton({ book }: LibraryButtonProp) {
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		async function checkIfSaved() {
			if (!user) {
				setIsSaved(false);
				return;
			}

			try {
				const bookRef = doc(db, 'users', user.uid, 'library', book.id);
				const bookSnapshot = await getDoc(bookRef);

				setIsSaved(bookSnapshot.exists());
			} catch (error) {
				console.error(error);
			}
		}

		checkIfSaved();
	}, [user, book.id]);

	async function handleClick() {
		if (!user) {
			dispatch(setIsAuthOpen());
		} else {
			try {
				const bookRef = doc(db, 'users', user.uid, 'library', book.id);
				await setDoc(bookRef, book);
				setIsSaved(true);
			} catch (error) {
				console.error(error);
			}
		}
	}
	return (
		<button
			className="flex items-center gap-2 text-[#0365f2] font-medium cursor-pointer mb-10 text-lg transition-colors hover:text-[#044298]"
			onClick={handleClick}
		>
			{!isSaved ? (
				<>
					<CiBookmark className=" w-6 h-6" />
					Add title to My Library
				</>
			) : (
				<>
					<IoBookmark className=" w-6 h-6" />
					Saved to My Library
				</>
			)}
		</button>
	);
}
