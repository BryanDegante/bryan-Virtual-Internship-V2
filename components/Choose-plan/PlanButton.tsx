type PlanButtonProps = {
	title: string;
	price: string;
	subtitle: string;
	selected: boolean;
	onClick: () => void;
};

export default function PlanButton({
	title,
	subtitle,
	price,
	selected,
	onClick,
}: PlanButtonProps) {
	return (
		<button
			className={`flex gap-6 w-full p-6 bg-[#f1f6f4] rounded-sm cursor-pointer max-w-170 mx-auto border-4 ${selected ? 'border-[#2bd97c]' : 'border-[#bac8ce]'}`}
			onClick={onClick}
		>
			<div className="relative w-6 h-6 rounded-[50%] border-2 border-black flex items-center justify-center">
				{selected && (
					<div className="w-1.5 h-1.5 rounded-full bg-black" />
				)}
			</div>
			<div>
				<div className="text-lg font-semibold text-text mb-2">
					{title}
				</div>
				<div className="text-2xl font-bold text-text mb-2">{price}</div>
				<div className="text-[#6b757b] text-sm">{subtitle}</div>
			</div>
		</button>
	);
}
