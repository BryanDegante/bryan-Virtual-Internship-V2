import { Book } from "@/types/Book";

type BookCardProps = {
	book: Book;
};

export default function BookCard({ book }: BookCardProps) {
	return <div>{book.title}</div>;
}
