import Skeleton from '@/components/UI/Skeleton/Skeleton';

export default function Loading() {
	return (
		<div className="personal-row">
			<div className="personal-container">
				<div className="flex gap-4 max-[1000px]:flex-col-reverse max-[1000px]:gap-8">
					<div className="w-full">
						<Skeleton width="70%" height="40px" />
						<div className="mt-4">
							<Skeleton width="35%" height="24px" />
						</div>
						<div className="mt-4">
							<Skeleton width="60%" height="24px" />
						</div>

						<div className="my-6 py-4 border-t border-b border-[#e1e7ea]">
							<div className="flex flex-wrap max-w-100 gap-y-3">
								<Skeleton width="45%" height="24px" />
								<Skeleton width="45%" height="24px" />
								<Skeleton width="45%" height="24px" />
								<Skeleton width="45%" height="24px" />
							</div>
						</div>

						<div className="flex gap-4 mb-6">
							<Skeleton width="120px" height="40px" />
							<Skeleton width="120px" height="40px" />
						</div>

						<Skeleton width="180px" height="40px" />

						<div className="mt-6">
							<Skeleton width="180px" height="24px" />
						</div>

						<div className="flex flex-wrap gap-4 my-4">
							<Skeleton width="90px" height="48px" />
							<Skeleton width="110px" height="48px" />
							<Skeleton width="100px" height="48px" />
						</div>

						<div className="space-y-2">
							<Skeleton width="100%" height="18px" />
							<Skeleton width="95%" height="18px" />
							<Skeleton width="80%" height="18px" />
						</div>

						<div className="mt-6">
							<Skeleton width="180px" height="24px" />
						</div>

						<div className="space-y-2 mt-4">
							<Skeleton width="100%" height="18px" />
							<Skeleton width="90%" height="18px" />
							<Skeleton width="75%" height="18px" />
						</div>
					</div>

					<div className="max-[1000px]:flex max-[1000px]:justify-center">
						<Skeleton width="300px" height="300px" />
					</div>
				</div>
			</div>
		</div>
	);
}
