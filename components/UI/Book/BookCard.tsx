import { Book } from '@/types/Book';
import { LuClock3 } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';

type BookCardProps = {
	book: Book;
};

export default function BookCard({ book }: BookCardProps) {
	return (
		<Link
			href={`/book/${book.id}`}
			className="relative rounded-sm max-w-50 w-full px-3 pb-3 pt-8 hover:bg-[#f1f6f4] "
		>
			{book.subscriptionRequired && (
				<div className="absolute bg-text text-white rounded-4xl top-0 right-0 text-sm px-2 py-1 ">
					Premium
				</div>
			)}
			<figure className="w-43 h-43 mb-2">
				<img src={book.imageLink} alt="" />
			</figure>
			<div className="text-base font-bold text-text mb-2 leading-5">
				{book.title}
			</div>
			<div className="text-sm text-[#6b757b] font-light mb-2 leading-4">
				{book.author}
			</div>
			<div className="text-sm text-[#394547]  mb-2 leading-4 ">
				{book.subTitle}
			</div>
			<div className="flex gap-2">
				<div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
					<div className="flex w-4 h-4">
						<LuClock3 />
					</div>
				</div>
				<div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
					<div className="flex w-4 h-4">
						<FaRegStar />
					</div>
					<div>{book.averageRating}</div>
				</div>
			</div>
		</Link>
	);
}
