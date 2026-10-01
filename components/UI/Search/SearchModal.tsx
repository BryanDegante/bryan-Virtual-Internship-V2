import { Book } from '@/types/Book';
import SearchBookCard from './SearchBookCard';

type SearchModalProps = {
	Books: Book[];
	clearSearch: () => void;
};

export default function SearchModal({ Books, clearSearch }: SearchModalProps) {
	return (
		<div
			className="flex flex-col max-w-110 w-full max-h-160 ml-auto overflow-y-auto p-4 absolute top-24 right-85 bg-white border
border-[#e1e7ea] shadow-[0_0_6px_0_rgba(0,0,0,0.14)] z-10"
		>{Books.map((book) => (
			<SearchBookCard book={book} key={book.id} clear={clearSearch} />
		))}</div>
	);
}
