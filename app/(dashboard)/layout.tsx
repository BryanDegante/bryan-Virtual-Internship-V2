'use client';

import { useState } from 'react';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import AuthenticationModal from '@/components/UI/Auth Modal/AuthenticationModal';
import Search from '@/components/UI/Search/Search';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isAuthOpen = useSelector((state: RootState) => state.auth.isAuthOpen);

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			<Sidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>

			<AuthenticationModal isOpen={isAuthOpen} />

			<main className="ml-0 lg:ml-50">
				<Search setIsSidebarOpen={setIsSidebarOpen} />
				{children}
			</main>
		</>
	);
}
