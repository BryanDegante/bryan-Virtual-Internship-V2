'use client';

import { useEffect, useRef, useState } from 'react';

type BookDurationProps = {
	audioLink: string;
};

export default function BookDuration({ audioLink }: BookDurationProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const updateDuration = () => {
			if (Number.isFinite(audio.duration)) {
				setDuration(audio.duration);
			}
		};

		audio.addEventListener('loadedmetadata', updateDuration);
		audio.addEventListener('durationchange', updateDuration);

		// Check if the duration is already available
		updateDuration();

		return () => {
			audio.removeEventListener('loadedmetadata', updateDuration);
			audio.removeEventListener('durationchange', updateDuration);
		};
	}, [audioLink]);

	function formatTime(time: number) {
		if (!Number.isFinite(time) || time <= 0) {
			return '00:00';
		}

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	}

	return (
		<>
			<audio ref={audioRef} src={audioLink} preload="metadata" />
			<div>{formatTime(duration)}</div>
		</>
	);
}
