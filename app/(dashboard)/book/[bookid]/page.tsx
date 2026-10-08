import { Book } from '@/types/Book';
import { FaRegStar, FaRegClock } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoMicOutline } from 'react-icons/io5';
import ReadListenButton from '@/components/UI/Book/ReadListenButton';
import LibraryButton from '@/components/UI/Book/LibraryButton';

export default async function BookDetails({
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
		<div className="personal-row">
			<div className="personal-container">
				<div className="flex gap-4 max-[1000px]:flex-col-reverse max-[1000px]:gap-8">
					<div className="w-full min-w-0">
						<div className="text-text mb-4 font-semibold text-2xl ">
							{data.subscriptionRequired
								? data.title + ' (Premium)'
								: data.title}
						</div>

						<div className="text-text mb-4 font-semibold text-sm lg:text-base">
							{data.author}
						</div>

						<div className="font-light text-lg lg:text-[20px] text-text mb-4">
							{data.subTitle}
						</div>

						<div className="mb-6 py-4 border-t border-b border-[#e1e7ea]">
							<div className="flex flex-wrap max-w-100 gap-y-3">
								<div className="flex items-center w-full sm:w-[50%] text-text font-medium text-sm">
									<FaRegStar className="flex h-6 w-6 mr-1 shrink-0" />
									<div>{data.averageRating}</div>
									<div>{`(${data.totalRating} ratings)`}</div>
								</div>

								<div className="flex items-center w-full sm:w-[50%] text-text font-medium text-sm">
									<FaRegClock className="flex h-6 w-6 mr-1 shrink-0" />
									<div>duration</div>
								</div>

								<div className="flex items-center w-full sm:w-[50%] text-text font-medium text-sm">
									<IoMicOutline className="flex h-6 w-6 mr-1 shrink-0" />
									<div>{data.type}</div>
								</div>

								<div className="flex items-center w-full sm:w-[50%] text-text font-medium text-sm">
									<HiOutlineLightBulb className="flex h-6 w-6 mr-1 shrink-0" />
									<div>{data.keyIdeas} Key ideas</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 mb-6">
							<ReadListenButton
								audible="read"
								subscriptionRequired={data.subscriptionRequired}
								bookId={data.id}
							/>

							<ReadListenButton
								audible="listen"
								subscriptionRequired={data.subscriptionRequired}
								bookId={data.id}
							/>
						</div>

						<LibraryButton book={data} />

						<div className="text-text mb-4 text-lg font-semibold">
							What's it about?
						</div>

						<div className="flex flex-wrap gap-4 mb-4">
							{data.tags.map((tag, index) => (
								<div
									key={index}
									className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-text font-medium rounded-sm"
								>
									{tag}
								</div>
							))}
						</div>

						<div className="text-text mb-4 leading-normal text-sm lg:text-base">
							{data.bookDescription}
						</div>

						<div className="text-text mb-4 text-lg font-semibold">
							About the author
						</div>

						<div className="text-text leading-normal text-sm lg:text-base">
							{data.authorDescription}
						</div>
					</div>

					<div>
						<div className="max-[1000px]:flex max-[1000px]:justify-center">
							<figure className="h-75 w-75 max-w-full min-w-0">
								<img
									src={data.imageLink}
									alt=""
									className="w-full h-full object-cover"
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
