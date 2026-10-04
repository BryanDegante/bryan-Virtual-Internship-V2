'use client';
import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark, CiSettings } from 'react-icons/ci';
import { RiBallPenLine } from 'react-icons/ri';
import { IoIosSearch, IoMdHelpCircleOutline } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthOpen } from '@/redux/slices/authSlice';
import type { RootState } from '@/redux/store';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export default function Sidebar() {
	const pathname = usePathname();
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();

	const handleLogout = async () => {
		await signOut(auth);
	};



	return (
		<div className="bg-[#f7faf9] w-50 min-w-50 fixed top-0 left-0 h-dvh z-10 transition-all duration-300">
			<div className="flex items-center justify-center h-15 pt-4 max-w-40 mx-auto">
				<img src="/assets/logo.png" className="w-full h-10 " alt="" />
			</div>
			<div className="flex flex-col justify-between pb-5 h-[calc(100vh-60px)] overflow-y-auto">
				<div className="flex-1 mt-10">
					<Link
						href="/for-you"
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
				</div>
				<div>
					<Link
						href="/settings"
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
	);
}
