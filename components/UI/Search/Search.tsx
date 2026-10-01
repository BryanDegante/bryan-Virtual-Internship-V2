import { IoIosSearch } from 'react-icons/io';

export default function Search() {
	return (
		<div className="bg-white border-b border-[#e1e7ea] h-20 z-10">
			<div className="relative flex items-center justify-end px-8 max-w-267.5 mx-auto h-full">
				<div className="relative max-w-85 w-full">
					<input
						type="text"
						placeholder="Search for books"
						className="h-10 w-full pl-4 pr-14 outline-none bg-[#f1f6f4] text-[#042330] text-sm rounded-lg border-2 border-[#e1e7ea]"
					/>

					<div className="absolute right-0 top-0 flex h-full items-center border-l-2 border-[#e1e7ea] px-2">
						<IoIosSearch className="w-6 h-6" />
					</div>
				</div>
			</div>
		</div>
	);
}
