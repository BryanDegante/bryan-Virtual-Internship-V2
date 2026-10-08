'use client';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import type { RootState } from '@/redux/store';
import type { Book } from '@/types/Book';
import BookCard from '@/components/UI/Book/BookCard';

export default function Library() {
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
const [booksData, setBooksData] = useState<Book[]>([]);

	useEffect(() => {
		async function getBooks() {
			if (!user) {
				return;
			}
			try { 
				const booksRef = collection(db, 'users', user.uid, 'library');
				const bookSnapshot = await getDocs(booksRef); 
			const books = bookSnapshot.docs.map((doc) => {
				return doc.data() as Book;
			});
				setBooksData(books);
			}
			catch (error) {
				console.log(error)
			}
		}
		getBooks()
	},[user]);

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
	return (
		<div className="personal-row">
			<div className="personal-container">
				<div className="text-[22px] font-bold text-text mb-4">
					Saved Books
				</div>
				<div className="font-light text-[rgb(57,69,71)] mb-4">
					{booksData.length === 1
						? `${booksData.length} item`
						: `${booksData.length} items`}
				</div>
				{booksData.length === 0 ? 
					<div className='bg-[rgb(241,246,244)] max-w-fit flex flex-col items-center text-center gap-2 p-8 rounded-xl mx-auto mb-14'>
						<div className='text-text font-semibold text-lg'>Save your favorite books?</div>
						<div className='text-[rgb(57,69,71)]'>When you save a book, it will appear here. </div>
				</div>
				:
				<div className="flex overflow-x-auto gap-4 snap-x mb-8">
					{booksData.map((book) => (
						<BookCard book={book} key={book.id} />
					))}
				</div> 
				}
				<div className="text-[22px] font-bold text-text mb-8">
					Finished Books
				</div>
				<div className="font-light text-[rgb(57,69,71)] mb-4">
					Items
				</div>
				<div className="flex overflow-x-auto gap-4 snap-x mb-8">
					{/* Books */}
				</div>
			</div>
		</div>
	);
}
