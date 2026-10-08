'use client';

import { useEffect, useState } from 'react';
import { IoIosSearch, IoMdClose, IoMdMenu } from 'react-icons/io';
import { Book } from '@/types/Book';
import SearchModal from './SearchModal';

type SearchProps = {
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Search({ setIsSidebarOpen }: SearchProps) {
	const [userInput, setUserInput] = useState('');
	const [apiSearchResults, setApiSearchResults] = useState<Book[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (!userInput.trim()) {
				setApiSearchResults([]);
				setIsLoading(false);
				return;
			}

			setIsLoading(true);

			const res = await fetch(
				`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${userInput}`,
			);

			const data: Book[] = await res.json();

			setApiSearchResults(data);
			setIsLoading(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [userInput]);

	function clearSearch() {
		setUserInput('');
		setApiSearchResults([]);
		setIsLoading(false);
	}

	return (
		<div className="bg-white border-b border-[#e1e7ea] h-20 z-10">
			<div className="relative flex items-center justify-between px-4 lg:px-8 max-w-267.5 mx-auto h-full">
				<button
					onClick={() => setIsSidebarOpen(true)}
					className="lg:hidden cursor-pointer"
				>
					<IoMdMenu className="w-7 h-7 text-text" />
				</button>

				<div className="relative max-w-85 w-full ml-4 lg:ml-auto">
					<input
						type="text"
						placeholder="Search for books"
						className="h-10 w-full pl-4 pr-14 outline-none bg-[#f1f6f4] text-[#042330] text-sm rounded-lg border-2 border-[#e1e7ea]"
						onChange={(event) => setUserInput(event.target.value)}
						value={userInput}
					/>

					<div className="absolute right-0 top-0 flex h-full items-center border-l-2 border-[#e1e7ea] px-2">
						{userInput ? (
							<button
								className="cursor-pointer"
								onClick={clearSearch}
							>
								<IoMdClose className="w-6 h-6" />
							</button>
						) : (
							<IoIosSearch className="w-6 h-6" />
						)}
					</div>
				</div>
			</div>

			{(isLoading || apiSearchResults.length > 0) && (
				<SearchModal
					Books={apiSearchResults}
					clearSearch={clearSearch}
					isLoading={isLoading}
				/>
			)}
		</div>
	);
}
