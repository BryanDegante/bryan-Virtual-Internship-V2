type SkeletonProps = {
	width: string;
	height: string;
};

export default function Skeleton({ width, height }: SkeletonProps) {
	return (
		<div
			className="relative overflow-hidden rounded bg-gray-300"
			style={{ width, height }}
		>
			<div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-gray-100 to-transparent" />
		</div>
	);
}
