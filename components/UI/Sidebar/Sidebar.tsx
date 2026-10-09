'use client';

import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark, CiSettings } from 'react-icons/ci';
import { RiBallPenLine, RiFontSize } from 'react-icons/ri';
import { IoIosSearch, IoMdHelpCircleOutline, IoMdClose } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import type { RootState } from '@/redux/store';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { setFontSize } from '@/redux/slices/fontSlice';

type SidebarProps = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
	isSidebarOpen,
	setIsSidebarOpen,
}: SidebarProps) {
	const pathname = usePathname();
	const user = useSelector((state: RootState) => state.auth.user);
	const fontSize = useSelector(
		(state: RootState) => state.playerfont.fontSize,
	);
	const isPlayerPage = pathname.startsWith('/player/');
	const dispatch = useDispatch();

	const handleLogout = async () => {
		await signOut(auth);
	};

	const handleNavigation = () => {
		setIsSidebarOpen(false);
	};

	return (
		<>
			{isSidebarOpen && (
				<div
					onClick={() => setIsSidebarOpen(false)}
					className="fixed inset-0 bg-black/40 z-10 lg:hidden"
				/>
			)}

			<div
				className={`fixed top-0 left-0 z-10 h-dvh transition-transform duration-300
		${isSidebarOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2.5rem)]'}
		lg:translate-x-0`}
			>
				<div className="bg-[#f7faf9] w-50 min-w-50 h-dvh">
					<div className="flex items-center justify-center h-15 pt-4 max-w-40 mx-auto">
						<img
							src="/assets/logo.png"
							className="w-full h-10"
							alt=""
						/>
					</div>

					<div
						className={`flex flex-col justify-between pb-5 ${
							isPlayerPage
								? 'h-[calc(100vh-140px)]'
								: 'h-[calc(100vh-60px)]'
						} overflow-y-auto`}
					>
						<div className="flex-1 mt-10">
							<Link
								href="/for-you"
								onClick={handleNavigation}
								className="flex items-center h-14 text-text mb-2 cursor-pointer hover:bg-[#f0efef]"
							>
								<div
									className={`w-1.25 h-full mr-4 ${
										pathname === '/for-you'
											? 'bg-[#2bd97c]'
											: 'bg-transparent'
									}`}
								></div>

								<div className="flex items-center justify-center mr-2">
									<AiOutlineHome className="w-6 h-6" />
								</div>

								<span>For you</span>
							</Link>

							<Link
								href="/library"
								onClick={handleNavigation}
								className="flex items-center h-14 text-text mb-2 cursor-pointer hover:bg-[#f0efef]"
							>
								<div
									className={`w-1.25 h-full mr-4 ${
										pathname === '/library'
											? 'bg-[#2bd97c]'
											: 'bg-transparent'
									}`}
								></div>

								<div className="flex items-center justify-center mr-2">
									<CiBookmark className="w-6 h-6" />
								</div>

								<span>My Library</span>
							</Link>

							<div className="flex items-center h-14 text-text mb-2 cursor-not-allowed">
								<div className="w-1.25 h-full mr-4"></div>

								<div className="flex items-center justify-center mr-2">
									<RiBallPenLine className="w-6 h-6" />
								</div>

								<span>Highlights</span>
							</div>

							<div className="flex items-center h-14 text-text mb-2 cursor-not-allowed">
								<div className="w-1.25 h-full mr-4"></div>

								<div className="flex items-center justify-center mr-2">
									<IoIosSearch className="w-6 h-6" />
								</div>

								<span>Search</span>
							</div>

							{isPlayerPage && (
								<div className="flex items-center ml-6 gap-2 h-14 text-text">
									<button
										className="flex flex-col items-center justify-center cursor-pointer w-8 h-8"
										onClick={() =>
											dispatch(setFontSize('base'))
										}
									>
										<RiFontSize className="w-5 h-5" />

										<div
											className={`w-full h-1 ${
												fontSize === 'base'
													? 'bg-[#2bd97c]'
													: 'bg-transparent'
											}`}
										></div>
									</button>

									<button
										className="flex flex-col items-center justify-center cursor-pointer w-8 h-8"
										onClick={() =>
											dispatch(setFontSize('large'))
										}
									>
										<RiFontSize className="w-6 h-6" />

										<div
											className={`w-full h-1 ${
												fontSize === 'large'
													? 'bg-[#2bd97c]'
													: 'bg-transparent'
											}`}
										></div>
									</button>

									<button
										className="flex flex-col items-center justify-center cursor-pointer w-8 h-8"
										onClick={() =>
											dispatch(setFontSize('extra'))
										}
									>
										<RiFontSize className="w-7 h-7" />

										<div
											className={`w-full h-1 ${
												fontSize === 'extra'
													? 'bg-[#2bd97c]'
													: 'bg-transparent'
											}`}
										></div>
									</button>

									<button
										className="flex flex-col items-center justify-center cursor-pointer w-9 h-9"
										onClick={() =>
											dispatch(setFontSize('double'))
										}
									>
										<RiFontSize className="w-9 h-9" />

										<div
											className={`w-full h-1 ${
												fontSize === 'double'
													? 'bg-[#2bd97c]'
													: 'bg-transparent'
											}`}
										></div>
									</button>
								</div>
							)}
						</div>

						<div>
							<Link
								href="/settings"
								onClick={handleNavigation}
								className="flex items-center h-14 text-text mb-2 cursor-pointer hover:bg-[#f0efef]"
							>
								<div
									className={`w-1.25 h-full mr-4 ${
										pathname === '/settings'
											? 'bg-[#2bd97c]'
											: 'bg-transparent'
									}`}
								></div>

								<div className="flex items-center justify-center mr-2">
									<CiSettings className="w-6 h-6" />
								</div>

								<span>Settings</span>
							</Link>

							<div className="flex items-center h-14 text-text mb-2 cursor-not-allowed">
								<div className="w-1.25 h-full mr-4"></div>

								<div className="flex items-center justify-center mr-2">
									<IoMdHelpCircleOutline className="w-6 h-6" />
								</div>

								<span>Help & Support</span>
							</div>

							<button
								onClick={() => {
									if (user) {
										handleLogout();
									} else {
										dispatch(setIsAuthOpen());
									}

									setIsSidebarOpen(false);
								}}
								className="flex items-center w-full h-14 text-text mb-2 cursor-pointer hover:bg-[#f0efef]"
							>
								<div className="w-1.25 h-full mr-4"></div>

								<div className="flex items-center justify-center mr-2">
									<MdOutlineLogout className="w-6 h-6" />
								</div>

								{user ? 'Logout' : 'Login'}
							</button>
						</div>
					</div>
				</div>

				<button
					onClick={() => setIsSidebarOpen(false)}
					className="absolute -right-10 top-5 lg:hidden flex items-center justify-center w-10 h-10 bg-[#f7faf9] rounded-r-md cursor-pointer"
				>
					<IoMdClose className="w-6 h-6 text-text" />
				</button>
			</div>
		</>
	);
}
