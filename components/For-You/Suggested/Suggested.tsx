import BookCard from '@/components/UI/Book/BookCard';
import { Book } from '@/types/Book';
import Link from 'next/link';

export default async function Suggested() {
	const res = await fetch(
		'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested',
	);
	const data: Book[] = await res.json();
	 return (
			<div>
				<div className="text-[22px] font-bold text-text mb-4">
					Suggested Books
				</div>
				<div className="font-light text-[#394547] mb-4">
					Browse those books
				</div>
				<div className="flex overflow-x-auto gap-4 snap-x mb-8">
					{data.map((book) => (
						<BookCard book={book} key={book.id} />
				   ))}
				</div>
			</div>
		);
}
