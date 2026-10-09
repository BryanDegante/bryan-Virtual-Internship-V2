import BookDuration from '@/components/UI/Book/BookDuration';
import { Book } from '@/types/Book';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

export default async function Selected() {
	const res = await fetch(
		'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected',
	);

	const data: Book[] = await res.json();
	const book = data[0];

	return (
		<Link href={`/book/${book.id}`}>
			<div className="p-4 sm:p-6 mb-6 bg-[#fbefd6] rounded-sm flex flex-col lg:flex-row justify-between gap-6 w-full lg:w-[calc((100%/3)*2)]">
				<div className="w-full lg:w-2/5 text-text">{book.subTitle}</div>

				<div className="hidden lg:block w-px bg-[#bac8ce]"></div>

				<div className="flex gap-4 w-full lg:w-3/5">
					<figure className="h-30 w-30 min-w-30 sm:h-35 sm:w-35 sm:min-w-35">
						<img
							src={book.imageLink}
							alt=""
							className="w-full h-full object-cover"
						/>
					</figure>

					<div className="w-full min-w-0">
						<div className="font-semibold text-text mb-2">
							{book.title}
						</div>

						<div className="mb-4 text-sm text-[#394547]">
							{book.author}
						</div>

						<div className="flex items-center gap-2">
							<div className="flex items-center w-10 h-10 min-w-10">
								<FaPlayCircle className="w-full h-full bg-white rounded-[50%]" />
							</div>

							<div className="text-sm text-text"><BookDuration audioLink={book.audioLink} /></div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
