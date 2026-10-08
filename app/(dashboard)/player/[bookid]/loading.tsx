import Skeleton from '@/components/UI/Skeleton/Skeleton';
import { FaPlayCircle } from 'react-icons/fa';
import { RiForward10Line, RiReplay10Line } from 'react-icons/ri';

export default function Loading() {
	return (
		<div className="relative w-full h-[calc(100vh-160px)]">
			{/* Loading content */}
			<div className="flex items-center justify-center h-full">
				<div className="w-10 h-10 border-4 border-[#e1e7ea] border-t-[#2bd97c] rounded-full animate-spin"></div>
			</div>

			{/* Audio player skeleton */}
			<div className="w-full h-20 flex items-center justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-10">
				{/* Book information */}
				<div className="flex gap-3 w-1/3">
					<Skeleton width='48px' height='48px'  />

					<div className="flex flex-col gap-2 justify-center">
						<Skeleton width='128px' height='12px' />
						<Skeleton width='80px' height='12px'/>
					</div>
				</div>

				{/* Player controls */}
				<div className="w-1/3">
					<div className="flex items-center justify-center gap-6">
						<button className="flex items-center justify-center">
							<RiReplay10Line className="text-white w-7 h-7" />
						</button>

						<button className="flex items-center justify-center">
							<FaPlayCircle className="w-10 h-10 text-white" />
						</button>

						<button className="flex items-center justify-center">
							<RiForward10Line className="text-white w-7 h-7" />
						</button>
					</div>
				</div>

				{/* Progress */}
				<div className="w-1/3 flex items-center gap-4">
					<div className="text-white text-sm">00:00</div>

					<div className="w-full max-w-75 h-1 bg-[#6d787d] rounded-full">
						<div className="w-0 h-full bg-[#2bd97c] rounded-full"></div>
					</div>

					<div className="text-white text-sm">00:00</div>
				</div>
			</div>
		</div>
	);
}
