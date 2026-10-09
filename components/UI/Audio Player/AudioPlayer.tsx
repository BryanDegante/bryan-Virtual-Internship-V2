'use client';

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import type { RootState } from '@/redux/store';
import { db } from '@/firebase/firebase';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { RiForward10Line, RiReplay10Line } from 'react-icons/ri';
import type { Book } from '@/types/Book';

type AudioPlayerProps = {
	book: Book;
};

export default function AudioPlayer({
	book
}: AudioPlayerProps) {
	const user = useSelector((state: RootState) => state.auth.user);

	const audioRef = useRef<HTMLAudioElement | null>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const updateDuration = () => {
			if (Number.isFinite(audio.duration)) {
				setDuration(audio.duration);
			}
		};

		audio.load();
		updateDuration();

		audio.addEventListener('loadedmetadata', updateDuration);
		audio.addEventListener('durationchange', updateDuration);

		return () => {
			audio.removeEventListener('loadedmetadata', updateDuration);
			audio.removeEventListener('durationchange', updateDuration);
		};
	}, [book.audioLink]);

	function togglePlay() {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			void audioRef.current.play().catch((error) => {
				console.error('Error playing audio:', error);
			});
		}
	}

	function rewind() {
		if (audioRef.current) {
			audioRef.current.currentTime = Math.max(
				0,
				audioRef.current.currentTime - 10,
			);
		}
	}

	function forward() {
		if (audioRef.current && Number.isFinite(audioRef.current.duration)) {
			audioRef.current.currentTime = Math.min(
				audioRef.current.duration,
				audioRef.current.currentTime + 10,
			);
		}
	}

	async function handleEnded() {
		setIsPlaying(false);

		if (!user) return;

		try {
			const finishedBookRef = doc(
				db,
				'users',
				user.uid,
				'finished',
				book.id,
			);

			await setDoc(finishedBookRef, {
				...book,
				finishedAt: new Date(),
			});
		} catch (error) {
			console.error('Error saving finished book:', error);
		}
	}

	function formatTime(time: number) {
		if (!Number.isFinite(time)) return '00:00';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	}

	const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

	return (
		<div className="w-full h-20 mt-auto flex items-center justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-20">
			<audio
				ref={audioRef}
				src={book.audioLink}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={handleEnded}
				onTimeUpdate={(e) =>
					setCurrentTime(e.currentTarget.currentTime)
				}
			/>

			<div className="flex gap-3 w-1/3">
				<figure className="flex max-w-12">
					<img src={book.imageLink} className="w-12 h-12" alt="" />
				</figure>

				<div className="text-white flex flex-col gap-1 justify-center text-sm">
					<div>{book.title}</div>
					<div className="text-[#bac8ce]">{book.author}</div>
				</div>
			</div>

			<div className="w-1/3">
				<div className="flex items-center justify-center gap-6">
					<button
						className="flex items-center justify-center rounded-[50%] cursor-pointer"
						onClick={rewind}
						aria-label="Rewind 10 seconds"
					>
						<RiReplay10Line className="text-white w-7 h-7 transition-colors duration-200 hover:text-[#2bd97c]" />
					</button>

					<button
						className="flex items-center justify-center rounded-[50%] cursor-pointer"
						onClick={togglePlay}
						aria-label={isPlaying ? 'Pause' : 'Play'}
					>
						{isPlaying ? (
							<FaPauseCircle className="w-10 h-10 text-white transition-colors duration-200 hover:text-[#2bd97c]" />
						) : (
							<FaPlayCircle className="w-10 h-10 text-white transition-colors duration-200 hover:text-[#2bd97c]" />
						)}
					</button>

					<button
						className="flex items-center justify-center rounded-[50%] cursor-pointer"
						onClick={forward}
						aria-label="Forward 10 seconds"
					>
						<RiForward10Line className="text-white w-7 h-7 transition-colors duration-200 hover:text-[#2bd97c]" />
					</button>
				</div>
			</div>

			<div className="w-1/3 flex items-center gap-4">
				<div className="text-white text-sm">
					{formatTime(currentTime)}
				</div>

				<input
					type="range"
					className="audio-slider"
					style={
						{
							'--range-progress': `${progress}%`,
						} as React.CSSProperties
					}
					value={currentTime}
					min={0}
					max={duration || 0}
					step={0.1}
					onChange={(e) => {
						const newTime = Number(e.currentTarget.value);

						if (audioRef.current) {
							audioRef.current.currentTime = newTime;
							setCurrentTime(newTime);
						}
					}}
					aria-label="Audio progress"
				/>

				<div className="text-white text-sm">{formatTime(duration)}</div>
			</div>
		</div>
	);
}
