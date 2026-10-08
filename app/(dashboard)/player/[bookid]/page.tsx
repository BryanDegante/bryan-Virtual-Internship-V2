import { Book } from '@/types/Book';
import PlayerAccess from '@/components/Player/PlayerAccess';

export default async function Player({
	params,
}: {
	params: Promise<{ bookid: string }>;
}) {
	const { bookid } = await params;

	const res = await fetch(
		`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookid}`,
	);

	const data: Book = await res.json();

	return (
		<div className="relative w-full overflow-y-auto h-[calc(100vh-160px)]">
			<PlayerAccess book={data} />
		</div>
	);
}
