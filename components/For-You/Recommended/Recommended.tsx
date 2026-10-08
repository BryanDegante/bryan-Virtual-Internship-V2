import BookCard from '@/components/UI/Book/BookCard';
import { Book } from '@/types/Book';

export default async function Recommended() {
	const res = await fetch(
		'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended',
	);

	const data: Book[] = await res.json();

	return (
		<div>
			<div className="text-[22px] font-bold text-text mb-4">
				Recommended For You
			</div>

			<div className="font-light text-[#394547] mb-4">
				We think you'll like these
			</div>

			<div className="flex overflow-x-auto gap-4 snap-x mb-8 pb-2">
				{data.map((book) => (
					<BookCard book={book} key={book.id} />
				))}
			</div>
		</div>
	);
}
