import { Book } from '@/types/Book';
import { FaRegStar, FaRegClock } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoMicOutline } from 'react-icons/io5';
import { LiaReadme } from 'react-icons/lia';
import { CiBookmark } from 'react-icons/ci';

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
					<div className="w-full">
						<div className="text-text mb-4 font-semibold text-[32px]">
							{data.title}
						</div>
						<div className="text-text mb-4 font-semibold">
							{data.author}
						</div>
						<div className="font-light text-[20px] text-text mb-4">
							{data.subTitle}
						</div>
						<div className="mb-6 py-4 border-t border-b border-[#e1e7ea] ">
							<div className="flex flex-wrap max-w-100 gap-y-3">
								<div className="flex items-center w-[50%] text-text font-medium text-sm">
									<FaRegStar className="flex h-6 w-6 mr-1" />
									<div>{data.averageRating}</div>
									<div>{`(${data.totalRating} ratings)`}</div>
								</div>
								<div className="flex items-center w-[50%] text-text font-medium text-sm">
									<FaRegClock className="flex h-6 w-6 mr-1" />
									<div>duration</div>
								</div>
								<div className="flex items-center w-[50%] text-text font-medium text-sm">
									<IoMicOutline className="flex h-6 w-6 mr-1" />
									<div>Audio & Text</div>
								</div>
								<div className="flex items-center w-[50%] text-text font-medium text-sm">
									<HiOutlineLightBulb className="flex h-6 w-6 mr-1" />
									<div>{data.keyIdeas} Key ideas</div>
								</div>
							</div>
						</div>
						<div className="flex gap-4 mb-6">
							<button className="flex items-center justify-center w-36 h-12 bg-text text-white text-base rounded-sm cursor-pointer gap-2 transition-opacity hover:opacity-80">
								<div className="flex">
									<LiaReadme className=" w-6 h-6 text-white" />
								</div>
								Read
							</button>
							<button className="flex items-center justify-center w-36 h-12 bg-text text-white text-base rounded-sm cursor-pointer gap-2 transition-opacity hover:opacity-80">
								<IoMicOutline className=" w-6 h-6 text-white" />
								Listen
							</button>
						</div>
						<div className="flex items-center gap-2 text-[#0365f2] font-medium cursor-pointer mb-10 text-lg transition-colors hover:text-[#044298]">
							<CiBookmark className=" w-6 h-6" />
							Add title to My Library
						</div>
						<div className="text-text mb-4 text-lg font-semibold">
							What's it about?
						</div>
						<div className="flex flex-wrap gap-4 mb-4">
							<div className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-text font-medium rounded-sm ">
								Biography & Memoir
							</div>
							<div className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-text font-medium rounded-sm ">
								Personal Development
							</div>
						</div>
						<div className="text-text mb-4 leading-normal">
							{data.bookDescription}
						</div>
						<div className="text-text mb-4 text-lg font-semibold">
							About the author
						</div>
						<div className="text-text leading-normal">
							{data.authorDescription}
						</div>
					</div>
					<div>
						<div className="max-[1000px]:flex max-[1000px]:justify-center">
							<figure className="h-75 w-75 min-w-75 ">
								<img src={data.imageLink} alt="" />
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
