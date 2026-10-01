import Link from 'next/link';
import { Book } from '@/types/Book';
import { LuClock3 } from 'react-icons/lu';

type SearchBookCardProps = {
    book: Book;
    clear: () => void;
};

export default function SearchBookCard({ book, clear}: SearchBookCardProps) {
	return (
		<Link
			href={`/book/${book.id}`}
            className="flex items-center p-4 gap-6 h-30 border-b border-[#e1e7ea] last:border-b-0 hover:bg-[#f1f6f4]"
            onClick={clear}
		>
			<figure className="w-20 h-20 min-w-20">
				<img src={book.imageLink} alt={book.title} />
			</figure>

			<div className="min-w-0">
				<div className="text-base font-medium text-text mb-2 leading-5">
					{book.title}
				</div>

				<div className="text-sm font-light text-[#6b757b] mb-2">
					{book.author}
				</div>

				<div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
					<LuClock3 />
					<div>duration</div>
				</div>
			</div>
		</Link>
	);
}
