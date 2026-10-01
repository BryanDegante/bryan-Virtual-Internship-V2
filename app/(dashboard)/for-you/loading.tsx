import Skeleton from '@/components/UI/Skeleton/Skeleton';
import { FaPlayCircle } from 'react-icons/fa';

export default function loading() {
	return (
		<div className="personal-row">
			<div className="personal-container">
				<div>
					<div className="text-[22px] font-bold text-text mb-4">
						Selected just for you
					</div>
					<div className="p-6 mb-6 bg-[#fbefd6] rounded-sm flex justify-between gap-6 w-[calc((100%/3)*2)]">
						<Skeleton width="230px" height="140px" />
						<div className="w-px bg-[#bac8ce] "></div>
						<div className="flex gap-4 w-3/5">
							<Skeleton width="140px" height="140px" />
							<div className="w-full">
								<Skeleton width="200px" height="24px" />
								<Skeleton width="200px" height="20px" />
								<div className="flex items-center gap-2">
									<div className="flex items-center w-10 h-10 min-w-10">
										<FaPlayCircle className="w-full h-full bg-white rounded-[50%]" />
									</div>
									<Skeleton width="50px" height="20px" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="text-[22px] font-bold text-text mb-4">
							Recommended For You
						</div>
						<div className="font-light text-[#394547] mb-4">
							We think you'll like these
						</div>
						<div className="flex overflow-x-auto gap-4 snap-x mb-8">
							{[...Array(5)].map((_, index) => (
								<div className="relative rounded-sm max-w-50 w-full px-3 pt-8 hover:bg-[#f1f6f4] " key={index}>
									<figure className="w-43 h-43 mb-2">
										<Skeleton
											width="172px"
											height="172px"
										/>
									</figure>
									<div className="text-base font-bold text-text mb-2 leading-5">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="text-sm text-[#6b757b] font-light mb-2 leading-4">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="text-sm text-[#394547]  mb-2 leading-4 ">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="flex gap-2">
										<Skeleton width="170px" height="20px" />
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<div className="text-[22px] font-bold text-text mb-4">
							Suggested Books
						</div>
						<div className="font-light text-[#394547] mb-4">
							Browse those books
						</div>
						<div className="flex overflow-x-auto gap-4 snap-x mb-8">
							{[...Array(5)].map((_, index) => (
								<div className="relative rounded-sm max-w-50 w-full px-3 pt-8 hover:bg-[#f1f6f4] " key={index}>
									<figure className="w-43 h-43 mb-2">
										<Skeleton
											width="172px"
											height="172px"
										/>
									</figure>
									<div className="text-base font-bold text-text mb-2 leading-5">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="text-sm text-[#6b757b] font-light mb-2 leading-4">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="text-sm text-[#394547]  mb-2 leading-4 ">
										<Skeleton width="170px" height="20px" />
									</div>
									<div className="flex gap-2">
										<Skeleton width="170px" height="20px" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
