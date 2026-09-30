import { Book } from '@/types/Book';
import {FaPlayCircle } from 'react-icons/fa';

export default async function Selected() {
	const res = await fetch(
		'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected',
	);

	const data: Book[] = await res.json();
	const book = data[0];

	return (
		<div className="p-6 mb-6 bg-[#fbefd6] rounded-sm flex justify-between gap-6 w-[calc((100%/3)*2)] cursor-pointer">
			<div className="w-2/5">{book.subTitle}</div>
			<div className="w-px bg-[#bac8ce] "></div>
			<div className='flex gap-4 w-3/5'>
				<figure className='h-35 w-35 min-w-35'>
					<img src={book.imageLink} alt="" />
				</figure>
				<div className='w-full'>
					<div className='font-semibold text-text mb-2'>{book.title}</div>
					<div className='mb-4 text-sm text-[#394547]'>{book.author}</div>
					<div className='flex items-center gap-2'>
						<div className='flex items-center w-10 h-10 min-w-10'>
							<FaPlayCircle className='w-full h-full bg-white rounded-[50%]'/>
						</div>
						<div className='text-sm text-text'>duration</div>
					</div>
				</div>
			</div>
		</div>
	);
}
