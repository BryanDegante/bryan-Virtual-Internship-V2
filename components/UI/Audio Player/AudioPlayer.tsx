'use client';

import { FaPlayCircle } from "react-icons/fa";
import { RiForward10Line, RiReplay10Line } from "react-icons/ri";

type AudioPlayerProps = {
    imageLink: string;
    title: string;
    audioLink: string;
    author: string;
}

export default function AudioPlayer({imageLink, title,author,audioLink}: AudioPlayerProps) {
    return (
		<div className="w-full h-20 mt-auto flex items-center justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-10">
			<div className="flex gap-3 w-1/3">
				<figure className="flex max-w-12">
					<img src={imageLink} className="w-12 h-12" alt="" />
				</figure>
				<div className="text-white flex flex-col gap-1 justify-center text-sm">
					<div>{title}</div>
					<div className="text-[#bac8ce]">{author}</div>
				</div>
			</div>
			<div className="w-1/3">
				<div className="flex items-center justify-center gap-6">
					<button className="flex items-center justify-center rounded-[50%] cursor-pointer">
						<RiReplay10Line className="text-white w-7 h-7 transition-colors duration-200 hover:text-[#2bd97c]" />
					</button>
					<button className="flex items-center justify-center rounded-[50%] cursor-pointer">
						<FaPlayCircle className="w-10 h-10 text-white transition-colors duration-200 hover:text-[#2bd97c]" />
					</button>
					<button className="flex items-center justify-center rounded-[50%] cursor-pointer">
						<RiForward10Line className="text-white w-7 h-7 transition-colors duration-200 hover:text-[#2bd97c]" />
					</button>
				</div>
			</div>
			<div className="w-1/3 flex items-center gap-4">
				<div className="text-white text-sm">time</div>
				<input
					type="range"
					className="audio-slider"
					style={{ '--range-progress': '0%' } as React.CSSProperties}
				/>
				<div className="text-white text-sm">time</div>
			</div>
		</div>
	);
}