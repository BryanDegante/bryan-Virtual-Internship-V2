import { Book } from '@/types/Book';
import AudioPlayer from '@/components/UI/Audio Player/AudioPlayer';
import AudioSummary from '@/components/Player/AudioSummary';

export default async function Player({
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
		<div className="relative w-full overflow-y-auto h-[calc(100vh-160px)] ">
			<div className="whitespace-pre-line p-6 max-w-200 mx-auto">
				<div className="text-text text-2xl mb-8 pb-4 leading-normal border-b border-[#e1e7ea] font-bold">
					{data.title}
				</div>
				<AudioSummary summary={data.summary} />
			</div>
            <AudioPlayer title={data.title} imageLink={data.imageLink} author={data.author} audioLink={data.audioLink} />
		</div>
	);
}
