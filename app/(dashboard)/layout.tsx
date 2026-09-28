'use client'; 

import Sidebar from '@/components/UI/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import AuthenticationModal from '@/components/UI/Auth Modal/AuthenticationModal';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	const isAuthOpen = useSelector((state: RootState) => state.auth.isAuthOpen);
	return (
		<>
			<Sidebar />
			<AuthenticationModal isOpen={isAuthOpen} />
			<main className="ml-50">{children}</main>
		</>
	);
}
