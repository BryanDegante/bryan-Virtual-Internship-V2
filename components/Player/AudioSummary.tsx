'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


type AudioSummaryProps = {
    summary: string;
}

export default function AudioSummary({ summary }: AudioSummaryProps) {

    const fontSize = useSelector(
		(state: RootState) => state.playerfont.fontSize,
    );
    const textSize =
		fontSize === 'base'
			? 'text-base'
			: fontSize === 'large'
				? 'text-lg'
				: fontSize === 'extra'
					? 'text-[22px]'
					: 'text-[26px]';
    
   return (
		<div
			className={`whitespace-pre-line leading-[1.4] text-text ${textSize}`}
		>
			{summary}
		</div>
   );
}